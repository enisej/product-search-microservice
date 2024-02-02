const { VALIDATION } = require("../utils/consts");
const ApiError = require('../utils/api-error');
class ProductSearchValidator {
    static validateSearchQuery(q, page) {
        ProductSearchValidator.validateParamsExist(q, page);
        ProductSearchValidator.validateQueryString(q);
        const parsedPage = ProductSearchValidator.validatePageParameter(page);

        return {
            q: ProductSearchValidator.sanitizeString(q),
            page: parsedPage,
        };
    }

    static validateParamsExist(q, page) {
        if (!q && !page) {
            throw ApiError.badRequest(VALIDATION.PARAMS);
        }
    }

    static validateQueryString(q) {
        if (!q || typeof q !== 'string' || q.length < 1) {
            throw ApiError.badRequest(VALIDATION.PARAMS);
        }
    }

    static validatePageParameter(page) {
        const parsedPage = parseInt(page, 10);
        if (isNaN(parsedPage) || parsedPage < 1) {
            throw ApiError.badRequest(VALIDATION.PAGE);
        }
        return parsedPage;
    }

    static sanitizeString(string) {
        // Allow only alphanumeric characters and spaces
        return string.replace(/[^a-zA-Z0-9\s]/g, '');
    }
}

module.exports = ProductSearchValidator;
