const { Logger } = require('../lib/logger.lib');

exports.RequestLogger = (req, res, next) => {
  const timestamp = Date.now();
  res.on('finish', () => {
    const finishedTimestamp = Date.now();

    const totalTime = finishedTimestamp - timestamp;
    const statusCode = res.statusCode.toString();
    if (statusCode.startsWith('4') || statusCode.startsWith('5')) {
      return Logger.error(`[${req.method}] - ${req.originalUrl} ${statusCode} - ${totalTime}ms`);
    }
    Logger.info(`[${req.method}] - ${req.originalUrl} ${statusCode} - ${totalTime}ms`);
  });
  next();
};
