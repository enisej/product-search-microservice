const request = require('supertest');
const express = require('express');
const productsController = require('../../src/controllers/products-controller');
const productSearchService = require('../../src/services/product-search-service');

jest.mock('../../src/services/product-search-service');

const app = express();

app.use(express.json());

app.post('/api/products/search', productsController.search);

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

describe('Products Controller Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  

  it('should handle successful response', async () => {

    const mockProducts = [{
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "final_price": 477.85
    }];
    productSearchService.getTransformedProducts.mockResolvedValueOnce(mockProducts);

    const response = await request(app).post('/api/products/search').send({ q: 'phone', page: 1 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockProducts);
  });  

});
