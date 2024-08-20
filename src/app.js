const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const initRoutes = require('./routes');
const passport = require('passport');   
// const passportJwtInt = require('./config/passport.jwt');

const app = express();

app.use(express.json({limit: "2mb"}));
app.use(express.urlencoded({extended: true, limit: "2mb"}))
// passport.use('jwt', passportJwtInt);

app.use(cors({
    origin: config.corsOrigins,
    Credential: true
}))

initRoutes(app);

module.exports = app