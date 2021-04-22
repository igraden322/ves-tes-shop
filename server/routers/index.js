const Router = require("express");
const router = new Router();

//const basketRouter = require("./basketRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const sizeRouter = require("./sizeRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/category",categoryRouter);
router.use("/size",sizeRouter);
router.use("/product",productRouter);
//router.use("/basket",basketRouter);

module.exports = router;
