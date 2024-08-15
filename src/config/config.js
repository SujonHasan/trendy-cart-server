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
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS
}
