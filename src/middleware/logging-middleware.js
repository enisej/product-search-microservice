const { LogIncoming } = require('../data-transfer-objects/logging/log-incoming');
const { LogOutgoing } = require('../data-transfer-objects/logging/log-outgoing');

module.exports = function loggingMiddleware(req, res, next) {
  const logIncoming = new LogIncoming(req);
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(logIncoming));

  const originalEnd = res.end;

  res.end = function logoOutgoing(chunk, encoding) {
    res.end = originalEnd;
    res.end(chunk, encoding);

    const logOutgoing = new LogOutgoing(res);
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(logOutgoing));
  };

  res.on('finish', () => {
    if (res.statusCode >= 400) {
      const errorLog = new LogOutgoing(res);
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(errorLog));
    }
  });

  next();
};
