const express = require('express');

const users = require('./users.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// router.use('/users', users);

router.get('/adminRoles', (req, res, next) => {
  res.status(200).render('adminRoles');
});



module.exports = router;
