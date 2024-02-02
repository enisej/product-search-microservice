const {LogIncoming} = require('../data-transfer-objects/logging/log-incoming');
const {LogOutgoing} = require('../data-transfer-objects/logging/log-outgoing');

module.exports = function (req, res, next) {
    const logIncoming = new LogIncoming(req)

    console.log(JSON.stringify(logIncoming))

    const originalEnd = res.end

    res.end = function (chunk, encoding) {
        res.end = originalEnd
        res.end(chunk, encoding)

        const logOutgoing = new LogOutgoing(res)
        console.log(JSON.stringify(logOutgoing))
    };

    res.on('finish', () => {
        if (res.statusCode >= 400) {
            const errorLog = new LogOutgoing(res)
            console.log(JSON.stringify(errorLog))
        }
    });

    next();
};

