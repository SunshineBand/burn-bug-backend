const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.get('/test', (req, res, next) => {
  res.status(200).json({'Hello': 'there'});
});

module.exports = app;