const express = require('express');

const { auth, requiresAuth } = require('express-openid-connect');

const router = express();

router.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email read:messages offline_access'
    }
  })
);

router.use((req, res, next) => {
  const isAuthenticated = req.oidc.isAuthenticated();

  next();
});

router.get('/adminRoles', (req, res, next) => {
  const admin_list = {
    first: "Ralph",
    last: "Greaves",
    email: "admin@email.edu"
  };

  res.status(200).render('adminRoles', { admin_list });
});

router.get('/dashboard', (req, res, next) => {
  res.status(200).render('dashboard', { isAuthenticated });
});

router.get('/error', (req, res, next) => {
  res.status(200).render('error');
});

router.get('/gallery', requiresAuth(), (req, res, next) => {
  res.status(200).render('gallery', { isAuthenticated });
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

router.get('/participantsList', (req, res, next) => {
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

router.get('/test', requiresAuth(), async (req, res, next) => {
  const userInfo = await req.oidc.fetchUserInfo();

  res.status(200).render('test', { userInfo });
});

router.get('/pollView', (req, res, next) => {
    res.status(200).render('pollView');
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
  const users = [
    { name: "Brady", role: "rol_Rtjhdoi7zz7wOjXX" },
    { name: "Derek", role: "" },
    { name: "Josh", role: "" },
    { name: "Kayla", role: "rol_Rtjhdoi7zz7wOjXX" },
    { name: "Ralph", role: "" }
  ];

  res.status(200).render('userList', { users });
});

router.get('/welcomePage', (req, res, next) => {
  res.status(200).render('welcomePage');
});

module.exports = router;
