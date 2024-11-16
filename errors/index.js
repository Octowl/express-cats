function CustomError({ message, status }) {
  const err = new Error(message);
  err.status = status;
  return err;
}

function NotFoundError(message, status = 404) {
  return CustomError({ message, status });
}

function BadRequestError(message, status = 400) {
  return CustomError({ message, status });
}

module.exports = { NotFoundError, BadRequestError };
