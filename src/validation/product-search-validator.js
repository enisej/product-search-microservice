const ApiError = require('../utils/api-error');
const { VALIDATION } = require('../utils/consts');

const validateParamsExist = (q, page) => {
  if (!q && !page) {
    throw ApiError.badRequest(VALIDATION.PARAMS);
  }
};

const validateQueryString = (q) => {
  if (!q || typeof q !== 'string' || q.length < 1) {
    throw ApiError.badRequest(VALIDATION.QUERY);
  }
};

const validatePageParameter = (page) => {
  const parsedPage = parseInt(page, 10);
  if (Number.isNaN(parsedPage) || parsedPage < 1) {
    throw ApiError.badRequest(VALIDATION.PAGE);
  }
  return parsedPage;
};

const sanitizeString = (string) => string.replace(/[^a-zA-Z0-9\s]/g, '');

const validateSearchQuery = (q, page) => {
  validateParamsExist(q, page);
  validateQueryString(q);
  const parsedPage = validatePageParameter(page);

  return {
    q: sanitizeString(q),
    page: parsedPage,
  };
};
const productSearchValidator = (req, res, next) => {
  const { q, page } = req.body;
  try {
    req.validatedSearchQuery = validateSearchQuery(q, page);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = productSearchValidator;
