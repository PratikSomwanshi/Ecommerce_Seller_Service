const { SellerService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

const sellerService = new SellerService();

async function createController(req, res) {
    try {
        console.log(this);
        const response = await sellerService.createService({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            shop_name: req.body.shop_name,
        });

        SuccessResponse.data = response;

        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createController,
};
