
const catchAsync = require("../utils/catchAsync");
const apiResponse = require('../utils/apiResponse')
const validationError = require('../utils/validationError');
const httpStatus = require('http-status');
const { Usermodel } = require("../models/user.model");
const mongoose = require("mongoose");
const config = require("../config/config");
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { OAuthAccessTokenModel } = require("../models/oAuthAccessToken.model");
const { OAuthRefreshTokenModel } = require("../models/oAuthRefreshToken.model");

const generateToken = async (user, exp, secret) => {

    return jwt.sign(
        {
            sub: user,
            iat: moment().unix(),
            exp: moment(exp).unix()
        },
        secret
    )
}

const OAuthAccessTokenDetails = async (user, accessToken, exp) =>{

    const data = new OAuthAccessTokenModel({
        user: user._id,
        accessToken: accessToken,
        revoked: false,
        expires: exp
    })

    return await data.save();
}

const OAuthRefreshTokenDetails = async (user, accessTokenDetails, refreshToken, exp2) => {

    const data = new OAuthRefreshTokenModel({
        user: user._id,
        accessToken: accessTokenDetails.accessToken,
        refreshToken,
        revoked: false,
        expires: exp2
    })    
 
    return await data.save();
}


const accessTokenDetailsAndRefreshTokenDetails = async (user) => {

    const exp = moment().add(parseInt(config.accessExpirationMinutes ?? ""), 'minute');    
    
    const accessToken = await generateToken(user, exp, config.accessSecret ?? "");

    const exp2 = moment().add(parseInt(config.refreshExpirationDays ?? ""), 'days');
    const refreshToken = await generateToken(user, exp2, config.refreshSecret ?? ""); 

    const accessTokenDetails = await OAuthAccessTokenDetails(user, accessToken, exp);

    const refreshTokenDetails = await OAuthRefreshTokenDetails(user, accessTokenDetails, refreshToken, exp2);

    return {accessTokenDetails, refreshTokenDetails}    

}

const register = catchAsync( async (req, res) => {

    const {firstName, lastName, email, password} = req.body;

    const newUser = new Usermodel({firstName, lastName, email, password});    

    const err = newUser.validateSync();
    if(err instanceof mongoose.Error){
        const validation = await validationError.requiredCheck(err.errors)
        
        return apiResponse(res, httpStatus.UNPROCESSABLE_ENTITY, validation, err)
    }

    const validation = await  validationError.uniqueCheck(await Usermodel.isUnique(email))        

    if(Object.keys(validation).length === 0){

        const user = await newUser.save();

        const { accessTokenDetails, refreshTokenDetails} = await accessTokenDetailsAndRefreshTokenDetails(user)

        return apiResponse(res, httpStatus.CREATED, {
            data: { 
                access: {
                    token: accessTokenDetails.accessToken,
                    expires: accessTokenDetails.expires
                },
                refresh: {
                    token: refreshTokenDetails.refreshToken,
                    expires: refreshTokenDetails.expires
                },
                user: user,
            },
            message: "Registration Complete"
        })
    }
    else {
        return apiResponse(res, httpStatus.NOT_ACCEPTABLE, {message: "validation Required"}, validation)
    }    

})

const login = catchAsync(async (req, res ) => {

    const {email, password} = req.body;

    const user = await Usermodel.findOne({email});
 
    if(!user){
        return apiResponse(res, httpStatus.NOT_ACCEPTABLE, {message: 'Invalid email. Please register first...'});
    }else if(! await user.isPasswordMatch(password)){
        return apiResponse(res, httpStatus.NOT_ACCEPTABLE, {message: "Password not matched"})
    }

    const {accessTokenDetails, refreshTokenDetails} = await accessTokenDetailsAndRefreshTokenDetails(user);

    return apiResponse(res, httpStatus.CREATED, {
        data: {
            access: {
                token: accessTokenDetails.accessToken,
                expires: accessTokenDetails.expires
            },
            refresh: {
                token: refreshTokenDetails.refreshToken,
                expires: refreshTokenDetails.expires
            },
            user,
        },
        message: "Login Successfull"
    })


})

const logout = catchAsync(async(req, res) => {

    const accessToken = req?.headers?.authorization?.split(' ')[1];    

    if(accessToken){

        const accessDetails = await OAuthAccessTokenModel.findOneAndUpdate({accessToken}, {revoked: true});
        await OAuthRefreshTokenModel.findOneAndUpdate({accessToken: accessDetails.accessToken}, {revoked: true});

        return apiResponse(res, httpStatus.ACCEPTED, {
            message: "Logout Successful"
        })
    }
})

module.exports = {
    register,
    login,
    logout
}