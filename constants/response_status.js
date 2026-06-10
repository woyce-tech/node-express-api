const RESPONSE_STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail',
  ERROR: 'error',
  UNAUTHORIZED: 'unauthorized',
  NOT_FOUND: 'not_found',
  BAD_REQUEST: 'bad_request',
};
const STATUS_CODE = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204,
};

module.exports = { RESPONSE_STATUS, STATUS_CODE };
