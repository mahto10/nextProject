const { createLogger, transports, format } = require('winston');
const { config } = require('../config');

const environment = config.get('app').env;

const logLevel = environment === 'development' ? 'debug' : 'warn';

exports.Logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format((info) => {
          info.level = ` ${info.level.toUpperCase()} `;
          return info;
        })(),
        format.simple(),
        format.colorize({
          all: true,
          colors: {
            info: 'blue',
            error: 'red',
          },
        })
      ),
    }),
  ],
  exitOnError: false,
});
