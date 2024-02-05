const ApiError = require('../utils/api-error');
const { ERRORS } = require('../utils/consts');

// eslint-disable-next-line consistent-return
module.exports = function errorHandlingMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    res.locals.error = err;
    return res.status(err.code).send({
      code: err.code,
      message: err.message,
    });
  }

  if (!res.headersSent) {
    return res.status(500).send({
      code: 500,
      message: ERRORS.UNEXPECTED,
    });
  }

  next();
};
