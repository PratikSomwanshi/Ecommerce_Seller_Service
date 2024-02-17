const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");
const { ErrorResponse } = require("../utils/common");

function createMiddleware(req, res, next) {
    try {
        if (!req.body.email) {
            throw new AppError("email not found", StatusCodes.BAD_REQUEST);
        }
        if (!req.body.password) {
            throw new AppError("password not found", StatusCodes.BAD_REQUEST);
        }
        if (!req.body.shop_name) {
            throw new AppError("shop_name not found", StatusCodes.BAD_REQUEST);
        }
        if (!req.body.name) {
            throw new AppError("name not found", StatusCodes.BAD_REQUEST);
        }

        next();
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createMiddleware,
};
