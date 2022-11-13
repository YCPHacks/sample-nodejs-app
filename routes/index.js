const express = require('express');

const auth = require('express-openid-connect').auth();

const users = require('./users.js');

const router = express.Router();

router.get('/adminRoles', (req, res) => {
  const admin_list = {
    first: "Ralph",
    last: "Greaves",
    email: "admin@email.edu"
  };

  res.status(200).render('adminRoles', { admin_list });
});

router.get('/dashboard', (req, res, next) => {
  res.status(200).render('dashboard');
});

router.get('/error', (req, res, next) => {
  res.status(200).render('error');
});

router.get('/gallery', (req, res, next) => {
  res.status(200).render('gallery');
});

router.get('/hardware', (req, res, next) => {
  res.status(200).render('hardware');
});

router.get('/', (req, res, next) => {
  res.status(200).render('welcomePage');
});

router.get('/judgingCriteria', (req, res, next) => {
  res.status(200).render('judgingCriteria');
});

router.get('/participantDashboard', (req, res, next) => {
  res.status(200).render('participantDashboard');
});

router.get('/participantsList', (req, res) => {
  const user_list = {
    first: "Ralph",
    last: "Greaves",
    created_at: "2022-10-28T14:58:13.967Z",
    status: "Pending"
  };

  res.status(200).render('participantsList', { user_list });
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
