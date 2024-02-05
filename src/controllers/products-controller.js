const productSearchService = require('../services/product-search-service');

class ProductsController {
  // eslint-disable-next-line class-methods-use-this
  async search(req, res, next) {
    try {
      const { q, page } = req.body;
      const products = await productSearchService.getTransformedProducts(q, page);
      res.status(200).send(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
