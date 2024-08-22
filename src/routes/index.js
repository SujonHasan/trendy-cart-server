const config = require("../config/config");
const ApiError = require("../utils/apiError");
const authRouter = require("./auth.route");
const guestRouter = require("./guest.route");
const httpStatus = require('http-status');
const apiResponse = require('../utils/apiResponse');
const ProductRouter = require("./product.route");



const initRoutes = (app)=> {

    app.use("/", guestRouter);

    app.use('/auth', authRouter);

    app.use('/', ProductRouter)

    app.use((req, res, next) => {
        const error = new ApiError(httpStatus.NOT_FOUND);
        return next(error);
    })

    app.use((err, req, res, next) => {

        const status = err.statusCode || res.statusCode || 500;
        const stack = config.env !== "production" ? err?.stack : {}
        return apiResponse(res, status, {message: err.message}, stack)
    })

} 


module.exports = initRoutes;