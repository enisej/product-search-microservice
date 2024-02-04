const express = require('express');
const multer = require('multer');
const ApiError = require('../utils/api-error');
const xmlService = require('../services/xml-service');
const {ERRORS} = require("../utils/consts");

module.exports = function contentTypeMiddleware(req, res, next) {
    const contentType = req.get('Content-Type');
    if (!contentType) {
        return res.status(400).send({
            code: 400,
            message: ERRORS.CONTENT_TYPE
        })
    }
    switch (true) {
        case contentType.startsWith('application/json'):
            return express.json()(req, res, next);
        case contentType.startsWith('multipart/form-data'):
            return multer().none()(req, res, next);
        case contentType.startsWith('application/xml'):
            return xmlService.xmlExtractor(req, res, next);
        default:
            return res.status(400).send({
                code: 400,
                message: `${ERRORS.UNSUPPORTED_CONTENT_TYPE} ${contentType}`,
            });
    }
};


