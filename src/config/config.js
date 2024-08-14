require('dotenv').config();

module.exports =  {
    env: process.env.NODE_ENVIRONMENT,
    host: process.env.HOST_NAME,
    port: process.env.HOST_PORT,
    corsOrigins: process.env.CORS_ORIGIN,
    mongoose: {
        url: process.env.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
}