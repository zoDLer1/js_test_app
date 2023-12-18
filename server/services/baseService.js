import sequelize from "../models/index.js";

class Service {
    constructor(model) {
        this.model = model
    }

    async getPage(page, options = {}) {
        const results = await this.model.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            limit: 5,
            offset: (page - 1) * 5,
            ...options
        })


        const countResult = await sequelize.query(`select count(*) from ${this.model.tableName}`, { model: this.model });

        const pages = Math.ceil(countResult[0].dataValues.count / 5)

        return { pages, results }
    }

    async create(data) {
        return await this.model.create(data)
    }

    async update(instance, data) {
        return await instance.update(data)
    }

    async delete(instance) {
        return await instance.destroy()
    }
}

export default Service
