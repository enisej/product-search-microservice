const Router = require('express');

const router = new Router();
const productsController = require('../controllers/products-controller');
const productSearchValidator = require('../validation/product-search-validator');

router.post('/products/search', productSearchValidator, productsController.search);

module.exports = router;
