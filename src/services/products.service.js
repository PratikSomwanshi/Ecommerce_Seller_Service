const axios = require("axios");
const { SellerRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const { StatusCodes } = require("http-status-codes");

class SellerProductService extends SellerRepository {
    async uploadImage(data) {
        return true;
        // try {
        //     const response = await axios.post(
        //         "http://localhost:5000/api/v1/products/upload",
        //         {
        //             data: data.product,
        //         }
        //     );
        //     return response;
        // } catch (error) {
        //
        //     throw new AppError(error, StatusCodes.BAD_REQUEST);
        // }
    }
}

module.exports = SellerProductService;
