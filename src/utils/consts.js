module.exports = {
  VALIDATION: {
    QUERY: "Invalid 'q' parameter. It should be a non-empty string without special characters.",
    PAGE: "Invalid 'page' parameter. It should be a positive number.",
    PARAMS: 'Invalid parameters!',
  },
  ERRORS: {
    BAD_REQUEST: '400 Bad Request!',
    SERVER_ERROR: '500 Server Error!',
    NOT_FOUND: '404 not found!',
    API_ERROR: 'Error from DummyJson API: ',
    UNEXPECTED: 'Unexpected error!',
    CONTENT_TYPE: 'Content-Type header is missing.',
    UNSUPPORTED_CONTENT_TYPE: 'Unsupported Content Type:',
  },
};
