const router = require("express").Router();
const {
    SellerController,
    SellerProductController,
} = require("../../controller");
const { SellerMiddleware } = require("../../middlewares");

router.post(
    "/",
    SellerMiddleware.createMiddleware,
    SellerController.createController
);

router.post("/product", SellerProductController.uploadProductController);

router.post("/signin", SellerController.signIn);

router.post("/auth", SellerController.authorization);

module.exports = router;
