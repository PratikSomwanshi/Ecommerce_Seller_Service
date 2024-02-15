const router = require("express").Router();
const {
    SellerController,
    SellerProductController,
} = require("../../controller");

router.post("/", SellerController.createController);

router.post("/product", SellerProductController.uploadProductController);

module.exports = router;
