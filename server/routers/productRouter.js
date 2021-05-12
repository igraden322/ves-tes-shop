const Router = require("express");
const router = new Router();
const productController = require('../controllers/productController')

router.post("/", productController.create);
router.get("/", productController. getAll);
router.get("/:id", productController.getOne);
router.get("/:id", productController.getRecord);

module.exports = router;
