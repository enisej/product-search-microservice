const { get } = require('axios');
const ApiError = require('../utils/api-error');
const { ProductDTO } = require('../data-transfer-objects/products/product-dto');
const { ERRORS } = require('../utils/consts');

class ProductSearchService {
  constructor() {
    this.apiSearchUrl = `${process.env.API_URL}/products/search`;
  }

  async getTransformedProducts(query, page, limit = 2) {
    const data = await this.#search(query, page, limit);
    return this.#transform(data?.products);
  }

  async #search(query, page, limit = 2) {
    try {
      const response = await get(`${this.apiSearchUrl}?q=${query}&limit=${limit}&skip=${(page - 1) * limit}`);
      return response.data;
    } catch (error) {
      throw ApiError.badRequest(ERRORS.API_ERROR + error.message);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  #transform(products) {
    try {
      return products.map((product) => new ProductDTO(product));
    } catch (error) {
      throw ApiError.badRequest();
    }
  }
}

module.exports = new ProductSearchService();
