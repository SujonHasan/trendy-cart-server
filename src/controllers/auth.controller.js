
const catchAsync = require("../utils/catchAsync");
const apiResponse = require('../utils/apiResponse')
const validationError = require('../utils/validationError');
const httpStatus = require('http-status');
const { Usermodel } = require("../models/user.model");
const mongoose = require("mongoose");


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

        return apiResponse(res, httpStatus.CREATED, {
            data: { 
                user: user,
            },
            message: "Registration Complete"
        })
    }
    else {
        return apiResponse(res, httpStatus.NOT_ACCEPTABLE, {message: "validation Required"}, validation)
    }    

})

module.exports = {
    register
}