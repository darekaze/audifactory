const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'alms',
    user: process.env.DB_USER || 'alms',
    password: process.env.DB_PASS || 'alms',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      operatorsAliases: false,
      storage: path.resolve(__dirname, '../../alms.sqlite'), // SQLite only
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
