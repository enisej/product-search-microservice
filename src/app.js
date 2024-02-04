require('dotenv').config();
const express = require('express');
const router = require('./routes/product-router');
const ApiError = require('./utils/api-error');
const errorHandlingMiddleware = require('./middleware/error-handling-middleware');
const loggingMiddleware = require('./middleware/logging-middleware');
const requestMiddleware = require('./middleware/request-middleware');
const responseMiddleware = require('./middleware/response-middleware');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(responseMiddleware);
app.use(loggingMiddleware);
app.use(requestMiddleware);

app.use('/api', router);
app.use((req, res, next) => {
  next(ApiError.notFound());
});

app.use(errorHandlingMiddleware);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
