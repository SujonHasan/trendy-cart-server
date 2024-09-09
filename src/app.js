const cors = require('cors');
const express = require('express');
const config = require('./config/config');
const initRoutes = require('./routes');
const passport = require('passport');   
const passportJwtInt = require('./config/passport.jwt');

const app = express();

app.use(cors({
    origin: config.corsOrigins,
    Credential: true
}))

app.use(express.json({limit: "2mb"}));
app.use(express.urlencoded({extended: true, limit: "2mb"}))
app.use(passport.initialize());
passport.use('jwt', passportJwtInt);

initRoutes(app);

module.exports = app