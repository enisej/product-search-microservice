const productSearchService = require('../services/product-search-service');
const {validateSearchQuery} = require("../validation/product-search-validator");


class ProductsController {

    async search(req, res, next) {
        try {
            const { q, page } = req.body;
            const { q: sanitizedQ, page: parsedPage } = validateSearchQuery(q, page);
            const products = await productSearchService.getTransformedProducts(sanitizedQ, parsedPage);
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ProductsController()
