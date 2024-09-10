const { Sequelize } = require('sequelize');
const { config } = require('../config');
const { Logger } = require('../lib/logger.lib');

const { host, user: username, password, port, name: database } = config.get('db');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host,
  username,
  password,
  port,
  database,
  logging: false,
});

if (config.get('app').env !== 'production') {
  sequelize
    .sync()
    .then(() => {
      Logger.info('Database synced');
    })
    .catch(() => {
      Logger.error('Database syncing error');
    });
}

exports.dataSource = sequelize;
