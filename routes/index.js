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

router.get('/dashboard', (req, res, next) => {
  res.status(200).render('dashboard');
});

// router.get('/error', (req, res, next) => {
//   res.status(200).render('error');
// });

router.get('/gallery', (req, res, next) => {
  res.status(200).render('gallery');
});

router.get('/hardware', (req, res, next) => {
  res.status(200).render('hardware');
});

// router.get('/index', (req, res, next) => {
//   res.status(200).render('index');
// });

router.get('/judgingCriteria', (req, res, next) => {
  res.status(200).render('judgingCriteria');
});

// router.get('/layout', (req, res, next) => {
//   res.status(200).render('layout');
// });

router.get('/participantDashboard', (req, res, next) => {
  res.status(200).render('participantDashboard');
});

router.get('/participantsList', (req, res, next) => {
  res.status(200).render('participantsList');
});

router.get('/pastEvents', (req, res, next) => {
  res.status(200).render('pastEvents');
});

router.get('/pollResults', (req, res, next) => {
  res.status(200).render('pollResults');
});

router.get('/polls', (req, res, next) => {
  res.status(200).render('polls');
});

router.get('/projectGallery', (req, res, next) => {
  res.status(200).render('projectGallery');
});

// router.get('/random', (req, res, next) => {
//   res.status(200).render('random');
// });

router.get('/registrationSettings', (req, res, next) => {
  res.status(200).render('registrationSettings');
});

router.get('/sponsor', (req, res, next) => {
  res.status(200).render('sponsor');
});

router.get('/teamManagement', (req, res, next) => {
  res.status(200).render('teamManagement');
});

router.get('/teamManager', (req, res, next) => {
  res.status(200).render('teamManager');
});

router.get('/teamSettings', (req, res, next) => {
  res.status(200).render('teamSettings');
});

router.get('/teamView', (req, res, next) => {
  res.status(200).render('teamView');
});

router.get('/teams', (req, res, next) => {
  res.status(200).render('teams');
});

router.get('/userList', (req, res, next) => {
  res.status(200).render('userList');
});

router.get('/welcomePage', (req, res, next) => {
  res.status(200).render('welcomePage');
});

module.exports = router;
