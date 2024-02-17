const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        shop_name: {
            type: String,
            required: true,
            unique: true,
        },
        products: {
            type: [mongoose.Schema.ObjectId],
        },
    },
    {
        timestamps: true,
    }
);

const sellerModel = mongoose.model("sellers", sellerSchema);

module.exports = sellerModel;
