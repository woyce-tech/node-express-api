const express = require('express');
const { RESPONSE_STATUS } = require('../../constants/response_status');
const common = require('../../utils/common');

const authRouter = express.Router();

authRouter.use('/', async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return common.apiResponse({
        message: 'Access denied',
        status: RESPONSE_STATUS.FAIL,
      }, res);
    }
    const { authorization: token } = req.headers;
    const { status } = await common.verifyToken(token);
    if (status !== RESPONSE_STATUS.SUCCESS) {
      return common.apiResponse(
        {
          status: RESPONSE_STATUS.UNAUTHORIZED,
          message: 'Invalid token',
        },
        res,
      );
    }
    return next();
  } catch (error) {
    return common.apiResponse({
      status: RESPONSE_STATUS.UNAUTHORIZED,
      message: 'Invalid token',
    }, res);
  }
});

module.exports = authRouter;
