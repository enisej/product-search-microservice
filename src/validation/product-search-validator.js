const { VALIDATION } = require("../utils/consts");

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
            throw Error(VALIDATION.PARAMS)
        }
    }

    static validateQueryString(q) {
        if (!q || typeof q !== 'string' || q.length < 1) {
            throw Error(VALIDATION.QUERY)
        }
    }

    static validatePageParameter(page) {
        const parsedPage = parseInt(page, 10);
        if (isNaN(parsedPage) || parsedPage < 1) {
            throw Error(VALIDATION.PAGE)
        }
        return parsedPage;
    }

    static sanitizeString(string) {
        // Allow only alphanumeric characters and spaces
        return string.replace(/[^a-zA-Z0-9\s]/g, '');
    }
}

module.exports = ProductSearchValidator;
