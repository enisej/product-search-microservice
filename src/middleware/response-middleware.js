const xmlService = require('../services/xml-service');

module.exports = function modifyResponseBody(req, res, next) {
  const originalSend = res.send;
  res.send = async function onSend(body) {
    const accept = req.get('Accept');

    if (!accept || accept.includes('application/json')) {
      return originalSend.call(this, body);
    }

    if (accept.includes('application/xml')) {
      const xmlBody = await xmlService.convertJsonToXml(body);
      res.type(accept);
      return originalSend.call(this, xmlBody);
    }
    return originalSend.call(this, body);
  };
  return next();
};
