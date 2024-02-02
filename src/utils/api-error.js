const {ERRORS} = require("./consts");

class ApiError extends Error {
    constructor(code, message) {
        super();
        this.code = code
        this.message = message
    }

    static badRequest(message = ERRORS.BAD_REQUEST) {
        return new ApiError(400, message)
    }

    static internal(message = ERRORS.SERVER_ERROR) {
        return new ApiError(500, message)
    }

    static notFound(message = ERRORS.NOT_FOUND) {
        return new ApiError(404, message)
    }
}

module.exports = ApiError