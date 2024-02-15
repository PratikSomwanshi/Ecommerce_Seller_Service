const { SellerProductService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

const sellerProductService = new SellerProductService();

async function uploadProductController(req, res) {
    try {
        console.log(req.files);

        // const response = await sellerProductService.uploadImage({
        //     product: req.body.product,
        // });

        // SuccessResponse.data = response;

        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    uploadProductController,
};
