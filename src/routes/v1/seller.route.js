const router = require("express").Router();
const { SellerController } = require("../../controller");
const { SellerMiddleware } = require("../../middlewares");

router.post(
    "/",
    SellerMiddleware.createMiddleware,
    SellerController.createController
);

router.get("/:id", SellerController.getSeller);

router.post("/signin", SellerController.signIn);

router.post("/auth", SellerController.authorization);

router.post(
    "/product",
    SellerMiddleware.productCreateMiddleware,
    SellerController.createProduct
);

module.exports = router;
