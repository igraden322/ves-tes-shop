const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER", allowNull: false },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  img: { type: DataTypes.STRING, defaultValue: "USER", allowNull: false },
});

const Size = sequelize.define("size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const ProductInfo = sequelize.define("product_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  decription: { type: DataTypes.STRING, allowNull: false },
});

const CategorySize = sequelize.define("category_size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

Category.hasMany(Product);
Product.belongsTo(Category);

Size.hasMany(Product);
Product.belongsTo(Size);

Product.hasMany(ProductInfo, {as: 'info'});
ProductInfo.belongsTo(Product);

ProductInfo.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Size.belongsToMany(Category, { through: CategorySize });
Category.belongsToMany(Size, { through: CategorySize });

module.exports = {
    User, Basket, BasketProduct, ProductInfo, Product, CategorySize, Category, Size
}