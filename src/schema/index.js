exports.requestValidator = (rules) => {
  return async (req, _, next) => {
    let promises = [];

    for (let [key, schema] of Object.entries(rules)) {
      const promise = schema.validateAsync(req[key], { abortEarly: false });

      promises.push(promise);
    }

    const result = await Promise.allSettled(promises);

    const errors = [];

    for (let { status, reason } of result) {
      if (status === "rejected") errors.push(reason.details);
    }

    if (errors.length !== 0) {
      next(errors);
    }

    next();
  };
};
