const xml2js = require('xml2js');
const ApiError = require('../utils/api-error');

class XmlService {
    async xmlExtractor(req, res, next) {
        const contentType = req.get('content-type');

        if (contentType.startsWith('application/xml')) {
            let xmlData = '';

            req.on('data', (chunk) => {
                xmlData += chunk;
            });

            req.on('end', () => {
                this.parseXml(xmlData, req, next);
            });
        } else {
            next();
        }
    }

    async convertJsonToXml(products) {
        const xmlBuilder = new xml2js.Builder();
        return xmlBuilder.buildObject({root: {data: products}})
    }

    async parseXml(xmlData, req, next) {
        const parser = new xml2js.Parser();

        parser.parseString(xmlData, (err, result) => {
            if (err) {
                return next(new ApiError(400, 'Error parsing XML content', err.message));
            }
            const keys = Object.keys(result);

            if (keys.length === 1) {
                const key = keys[0];
                const params = {};

                Object.entries(result[key]).forEach(([param, [value]]) => {
                    params[param] = value;
                });
                req.body = params;
                return next();
            }
            req.body = result;
            return next();
        });
    }
}

module.exports = new XmlService();
