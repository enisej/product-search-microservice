const Router = require('express')
const router = new Router()
const productsController = require('../controllers/products-controller')

router.post('/products/search', productsController.search)

module.exports = router