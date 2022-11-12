const express = require('express');

const users = require('./users.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/users', users);

module.exports = router;
