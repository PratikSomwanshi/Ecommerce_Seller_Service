const CrudRepository = require("./crud.repository");
const { Seller } = require("../models");

class SellerRepository extends CrudRepository {
    constructor() {
        super(Seller);
    }
}

module.exports = SellerRepository;
