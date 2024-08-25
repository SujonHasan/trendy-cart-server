const mongoose = require('mongoose');
const config = require("../config/config");
const seeds = require('./index.js');


mongoose.connect(config.mongoose.url)
    .then(() =>{
        console.log("Connected to mongoDB");
    })
    .catch((err) => {
        console.log("mongoose error == ", err);
        
    })

seeds(true);
