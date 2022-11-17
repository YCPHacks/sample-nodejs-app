const path = require('path');

const express = require('express');
const logger = require('morgan');

const helmet = require('helmet');

const indexRouter = require('./routes/index');

const app = express();

app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.hidePoweredBy());
app.use((req, res, next) => {
  res.set('Permissions-Policy', 'geolocation=(), microphone=()');

  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

app.use('/', indexRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).send(err.message);
});

module.exports = app;
