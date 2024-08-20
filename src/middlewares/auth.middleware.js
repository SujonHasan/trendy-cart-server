const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/apiError');
const {OAuthAccessTokenModel} = require('../models/oAuthAccessToken.model.js');
const {OAuthRefreshTokenModel} = require('../models/oAuthRefreshToken.model.js');
const moment = require('moment');
const passport = require('passport');
const httpStatus = require('http-status'); 



const verifyCallback = (req, resolve, reject) => async(err, user, info) => {    

    if(err || !(user || info)){

        const error = new ApiError(httpStatus.UNAUTHORIZED, "Session expired. Please login again.. ")        
        return reject(error)
    }
    
    const oAuthAccessDetails = await OAuthAccessTokenModel.findOne({
        accessToken: req.headers.authorization.split(" ")[1],
        revoked: false,
        expires: { $gte: moment().format() },
      });    

    if(oAuthAccessDetails){
        const oAuthRefreshDetails = await OAuthRefreshTokenModel.findOne({
            accessToken: oAuthAccessDetails.accessToken,
            revoked: false,
            expires: {$gte: moment().format()}
        })

        if(oAuthRefreshDetails){
            req.user = user;
            req.access = oAuthAccessDetails;
            req.refresh  = oAuthRefreshDetails;
            return resolve();
        }
    }

    const error = new ApiError(httpStatus.UNAUTHORIZED, "Session expired, Please login again...");

    return reject(error)

}

const isAuthenticated = catchAsync(async(req, res, next) => {
    
    return new Promise((resolve, reject) => {

        return passport.authenticate('jwt', {session: false}, verifyCallback(req, resolve, reject))(req, res, next)

    }).then(() => next())
      .catch((err) => next(err))
})


module.exports = {
    isAuthenticated
}