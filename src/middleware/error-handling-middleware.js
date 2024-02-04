const ApiError = require('../utils/api-error');
const { ERRORS } = require('../utils/consts');

module.exports = function errorHandlingMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    res.locals.error = err;
    res.status(err.code).send({
      code: err.code,
      message: err.message,
    });
  }

  if (!res.headersSent) {
    res.locals.error = err;
    res.status(500).send({
      code: 500,
      message: ERRORS.UNEXPECTED,
    });
  }

  next();
};
