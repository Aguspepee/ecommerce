var express = require('express');
var router = express.Router();
const cartsController = require("../controllers/cartsController.js")

//Rutas
router.get('/', cartsController.getAll);
router.get('/:cid', cartsController.getById);

router.post('/', cartsController.create);
router.post('/:cid/product/:pid', cartsController.addProductToCart);
 
module.exports = router;