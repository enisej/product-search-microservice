const xmlService = require('../services/xml-service');

module.exports = modifyResponseBody = (req, res, next) => {
    const originalSend = res.send;
    res.send = async function (body) {
        const accept = req.get('Accept');

        if (!accept || accept.includes('application/json')) {
            return await originalSend.call(this, body);
        }

        if (accept.includes('application/xml')) {
            const xmlBody = await xmlService.convertJsonToXml(body);
            res.type(accept);
            return await originalSend.call(this, xmlBody);
        }
    };
    return next();
};
