const { SellerProductService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

const sellerProductService = new SellerProductService();

async function uploadProductController(req, res) {
    try {
        // const response = await sellerProductService.uploadImage({
        //     product: req.body.product,
        // });

        // SuccessResponse.data = response;

        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    uploadProductController,
};
