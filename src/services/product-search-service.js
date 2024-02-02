const {get} = require('axios');
const {ProductDTO} = require("../data-transfer-objects/product-dto");

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
            return response.data
        } catch (error) {
            throw error
        }
    }

    async #transform(products) {
        try {
            return products.map((product) => new ProductDTO(product));
        }catch (error){
            throw error
        }

    }
}

module.exports = new ProductSearchService();