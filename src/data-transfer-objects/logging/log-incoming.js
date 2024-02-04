class LogIncoming {
  constructor(req) {
    this.type = 'messageIn';
    this.body = JSON.stringify({ query: req.query, body: req.body });
    this.method = req.method;
    this.path = req.originalUrl;
    this.dateTime = new Date().toISOString();
  }
}

module.exports = { LogIncoming };
