const uuid = require("uuid");
const path = require("path");
const { Product, ProductInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class ProductController {
  async create(req, res, next) {
    try {
<<<<<<< HEAD
      let { name, price, typeId, categoryId, info } = req.body;
=======
      let { name, price, sizeId, categoryId, info } = req.body;
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({
        name,
        price,
        categoryId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id
          }))
      }



      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { categoryId, typeId, limit, page } = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let products;
    if (!categoryId && !typeId) {
      products = await Product.findAndCountAll({ limit, offset });
    }

    if (categoryId && !typeId) {
      products = await Product.findAndCountAll({
        where: { categoryId },
        limit,
        offset,
      });
    }

    if (!categoryId && typeId) {
      products = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }

    if (categoryId && typeId) {
      products = await Product.findAndCountAll({
        where: { typeId, categoryId },
        limit,
        offset,
      });
    }

    return res.json(products);
  }

  async getOne(req, res) {
    const { id } = req.params
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: 'info' }]
    })
    return res.json(product)
  }

  async getRecord(req, res) {
    const { id } = req.query
    const product = await Product.findOne({
      where: { id }
    })
    return res.json(product)
  }
}

module.exports = new ProductController();
