const mongoose = require("mongoose");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async get(id) {
        const response = await this.model.findOne({
            _id: id,
        });

        return response;
    }
}

module.exports = CrudRepository;
