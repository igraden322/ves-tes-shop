const { Basket } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {

    async add(req, res) {
        const { userId } = req.body;
        const basket = await Bakset.create({ userId });
        return res.json(basket);
    }

    async get(req, res) {
        const { userId } = req.body;
        const basket = await Basket.findOne({
            userId: userId
        })
        if (basket) {
            return res.json(basket)
        }
        else {
            add(req, res);
        }
    }
}

module.exports = new BasketController();
