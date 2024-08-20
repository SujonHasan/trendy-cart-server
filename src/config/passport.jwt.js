const {Strategy, ExtractJwt} = require('passport-jwt');
const config = require('./config');
const catchAsync = require('../utils/catchAsync');
const { Usermodel } = require('../models/user.model');

const passportJwtInt = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.accessSecret
    },
    catchAsync(async (jwtPayload, done) => {

        const user = await Usermodel.findOne({_id: jwtPayload.sub._id})

        if(!user) done(true, false)

        return done(false, user, jwtPayload);
    })
)

module.exports = passportJwtInt;