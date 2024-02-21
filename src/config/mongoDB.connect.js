const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");
const serverConfig = require("./server.config");

async function connectDB() {
    try {
        await mongoose.connect(serverConfig.MONGODB_URI);
    } catch (error) {
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    connectDB,
};
