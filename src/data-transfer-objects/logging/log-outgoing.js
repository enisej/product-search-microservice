class LogOutgoing {
  constructor(res) {
    this.type = 'messageOut';
    this.body = JSON.stringify(res.locals.data);
    this.dateTime = new Date().toISOString();
    this.fault = res.locals.error ? res.locals.error.stack : null;
  }
}

module.exports = { LogOutgoing };
