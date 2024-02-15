const router = require("express").Router();

const sellerRoute = require("./seller.route");

router.use("/sellers", sellerRoute);

module.exports = router;
