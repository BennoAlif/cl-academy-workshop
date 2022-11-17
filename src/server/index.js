const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const db = require('../config/database');
const router = require('../routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

db.authenticate()
  .then(() => {
    // db.sync({ force: true, alter: true });
    console.log('[DB] Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('[DB] Unable to connect to the database:', error);
  });

app.use(router);

module.exports = app;
