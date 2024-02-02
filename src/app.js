require('dotenv').config()
const express = require('express')
const errorHandlingMiddleware = require("./middleware/error-handling-middleware")
const router = require("./routes/product-router")
const ApiError = require("./utils/api-error");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

app.use('/api', router)

app.use((req, res, next) => {
    const error = ApiError.notFound()
    next(error);
});

app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
