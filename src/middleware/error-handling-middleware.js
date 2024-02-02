const ApiError = require('../utils/api-error');
const { ERRORS } = require('../utils/consts');

module.exports = function (err, req, res, next) {
    if (err.isAxiosError) {
        const { response } = err;
        if (response) {
            const { status, data } = response;
            res.locals.error = err;
            return res.status(status).json({
                code: status,
                message: ERRORS.API_ERROR = data.message,
            });
        }
    }

    if (err instanceof ApiError) {
        res.locals.error = err;
        return res.status(err.code).json({
            code: err.code,
            message: err.message,
        });
    }

    res.locals.error = err;

    return res.status(500).json({
        code: 500,
        message: ERRORS.UNEXPECTED,
    });
};
