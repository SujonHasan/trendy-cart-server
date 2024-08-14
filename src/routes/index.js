const ApiError = require("../utils/apiError");
const authRouter = require("./auth.route");
const guestRouter = require("./guest.route");
const httpStatus = require('http-status');



const initRoutes = (app)=> {

    app.use("/", guestRouter);

    app.use('/auth', authRouter);

    app.use((req, res, next) => {
        const error = new ApiError(httpStatus.NOT_FOUND);
        return next(error);
    })

} 


module.exports = initRoutes;