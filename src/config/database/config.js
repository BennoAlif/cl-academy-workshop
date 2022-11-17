const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'db_cl-academy',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync(path.join(__dirname, '/..', '/..', '/..', '/ca-certificates.crt')),
    },
  },
};
