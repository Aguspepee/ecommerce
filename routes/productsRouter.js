var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController.js")

//Rutas
router.get('/', productsController.getAll);
router.get('/:pid', productsController.getById);

router.post('/', productsController.create);

router.put('/:pid', productsController.edit);

router.delete('/:pid', productsController.delete);
 
module.exports = router;