const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED_SUCCESSFULLY: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const DEFAULT_TABLE_PAGINATION = {
  pageSize: 5,
  defaultCurrent: 1,
  defaultPageSize: 5,
  showQuickJumper: false,
};

const DEFAULT_PAGINATION = {
  page: 1,
  limit: 5,
};

export { HTTP_STATUS_CODE, DEFAULT_TABLE_PAGINATION, DEFAULT_PAGINATION };
