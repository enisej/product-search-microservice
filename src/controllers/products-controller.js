const productSearchService = require('../services/product-search-service');


class ProductsController {

    async search(req, res, next) {
        try {
            const { q, page } = req.body;
            const products = await productSearchService.getTransformedProducts(q, page);
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ProductsController()
