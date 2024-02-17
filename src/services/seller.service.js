const { SellerRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const { StatusCodes } = require("http-status-codes");
const { Seller } = require("../models");
const serverConfig = require("../config/server.config");
const jwt = require("jsonwebtoken");
const axios = require("axios");

class SellerService extends SellerRepository {
    async createService(data) {
        try {
            const response = await this.create(data);
            return response;
        } catch (error) {
            if (error.code == 11000) {
                throw new AppError(
                    {
                        code: 11000,
                        message: "duplicate entry found",
                        value: error.keyValue,
                    },
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppError(error, StatusCodes.BAD_REQUEST);
        }
    }

    async signIn(data) {
        try {
            const user = await Seller.findOne({
                email: data.email,
            });

            if (!user) {
                throw new AppError("Seller not found", StatusCodes.BAD_REQUEST);
            }

            const token = jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                },
                serverConfig.JWT_SECRET,
                {
                    expiresIn: serverConfig.JWT_EXPIRY,
                }
            );

            let res = {};
            res.id = user._id;
            res.email = user.email;
            res.token = token;

            return res;
        } catch (error) {
            if (error instanceof AppError) throw error;

            throw new AppError(error, StatusCodes.BAD_REQUEST);
        }
    }

    async authorization(data) {
        try {
            const valid = jwt.verify(data.token, serverConfig.JWT_SECRET);

            if (!valid) throw new Error("token expired, please relogin");

            return valid;
        } catch (error) {
            throw error;
        }
    }

    async createProduct(data) {
        try {
            console.log(data);
            const seller = await Seller.findOne({
                _id: data.seller,
            });

            if (!seller) {
                throw new AppError("seller not found", StatusCodes.BAD_REQUEST);
            }

            const response = await fetch(
                "http://localhost:5000/api/v1/products",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((res) => res.json())
                .catch((error) => {
                    throw new AppError(
                        "Unable to fetch the data, maybe server is down",
                        StatusCodes.BAD_REQUEST
                    );
                });

            console.log(response);
            return response.data;
        } catch (error) {
            throw new AppError(error, StatusCodes.BAD_REQUEST);
        }
    }
}

module.exports = SellerService;
