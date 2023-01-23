const jwt = require('jsonwebtoken');

const { RESPONSE_STATUS } = require('../constants/response_status');

exports.apiResponse = async ({ status, data, message }, res) => {
  let statusCode = '';
  if (status === RESPONSE_STATUS.FAIL) {
    statusCode = 400;
  } else if (status === RESPONSE_STATUS.UNAUTHORIZED) {
    statusCode = 401;
  } else if (status === RESPONSE_STATUS.ERROR) {
    statusCode = 500;
  } else if (status === RESPONSE_STATUS.NOT_FOUND) {
    statusCode = 404;
  } else if (status === RESPONSE_STATUS.BAD_REQUEST) {
    statusCode = 400;
  } else if (status === RESPONSE_STATUS.SUCCESS) {
    statusCode = 200;
  }
  return res.status(statusCode).json({ status, data, message });
};

exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'privateKey');
    return { status: RESPONSE_STATUS.SUCCESS, data: decoded };
  } catch (error) {
    return { status: RESPONSE_STATUS.UNAUTHORIZED, message: error.message };
  }
};
