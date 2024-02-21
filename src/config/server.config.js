const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.jwt_secret,
    JWT_EXPIRY: process.env.jwt_expiry,
    MONGODB_URI: process.env.MONGODB_URI,
};
