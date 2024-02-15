const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/ecommerce_backend");
    } catch (error) {
        console.log(error);
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    connectDB,
};
