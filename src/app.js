const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const initRoutes = require('./routes');

const app = express();

app.use(express.json({limit: "2mb"}));
app.use(express.urlencoded({extended: true, limit: "2mb"}))

app.use(cors({
    origin: config.corsOrigins,
    Credential: true
}))

initRoutes(app);

module.exports = app