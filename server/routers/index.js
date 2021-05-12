const Router = require("express");
const router = new Router();

const basketRouter = require("./basketRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");
const basketProductRouter = require('./basketProductRouter')

router.use("/user", userRouter);
router.use("/category",categoryRouter);
router.use("/type",typeRouter);
router.use("/product",productRouter);
router.use("/basket",basketRouter);
router.use("/basketProduct",basketProductRouter);

module.exports = router;
