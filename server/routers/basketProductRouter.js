const Router = require("express");
const router = new Router();
const basketProductController = require('../controllers/basketProductController')

router.post("/:id", basketProductController.add);
router.post("/:id", basketProductController.delete);
router.get("/:id", basketProductController.getAll);


module.exports = router;
