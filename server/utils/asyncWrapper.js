const asyncWrapper = (fn) => (req, res, next) => {
  return fn(req, res, next).catch((error) => {
    next(error);
  });
};

module.exports = asyncWrapper;
