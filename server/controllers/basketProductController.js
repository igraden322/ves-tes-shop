const { BasketProduct } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketProductController {

    async add(req, res) {
        let { basketId, productId } = req.body;
        const records = await BasketProduct.create({ productId, basketId });
        return res.json(records);
    }

    async delete(req, res) {
        const { id } = req.body;
        const delBasket = await BasketProduct.delete({ id })
        return res.json(delBasket)
    }

    async getAll(req, res) {
        const { basketId } = req.query;
        const basket = await BasketProduct.findAll({
            where:{
                basketId: basketId  
            }
        });
        return res.json(basket)
    }
}

module.exports = new BasketProductController();
