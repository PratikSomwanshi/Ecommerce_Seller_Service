const { SellerRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const { StatusCodes } = require("http-status-codes");

class SellerService extends SellerRepository {
    async createService(data) {
        try {
            const response = await this.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw new AppError(error, StatusCodes.BAD_REQUEST);
        }
    }
}

module.exports = SellerService;
