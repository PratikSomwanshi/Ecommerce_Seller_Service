const { SellerRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const { StatusCodes } = require("http-status-codes");
const { Seller } = require("../models");
const serverConfig = require("../config/server.config");
const jwt = require("jsonwebtoken");

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
}

module.exports = SellerService;
