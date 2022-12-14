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

router.use(async (req, res, next) => {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();

  if (res.locals.isAuthenticated) {
    res.locals.userInfo = await req.oidc.fetchUserInfo();
  }

  next();
});

router.get('/adminRoles', requiresAuth(), async (req, res, next) => {
  const admin_list = {
    first: "Ralph",
    last: "Greaves",
    email: "admin@email.edu"
  };

  res.status(200).render('adminRoles', { admin_list });
});

router.get('/dashboard', requiresAuth(), async (req, res, next) => {
  res.status(200).render('dashboard');
});

// Profile image for users
router.get('/navbar', requiresAuth(), async (req, res, next) => {
  res.status(200).render('navbar');
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

router.get('/participantDashboard', requiresAuth(), async (req, res, next) => {
  res.status(200).render('participantDashboard');
});

router.get('/participantsList', requiresAuth(), async (req, res, next) => {
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

router.get('/pollResults', requiresAuth(), async (req, res, next) => {
  res.status(200).render('pollResults');
});

router.get('/pollView', requiresAuth(), async (req, res, next) => {
  res.status(200).render('pollView');
});

router.get('/polls', requiresAuth(), async (req, res, next) => {
  res.status(200).render('polls');
});

router.get('/registrationQuestions', requiresAuth(), async (req, res, next) => {
  res.status(200).render('registrationQuestions');
});


router.get('/projectGallery', requiresAuth(), async (req, res, next) => {
  res.status(200).render('projectGallery');
});

router.get('/registrationSettings', requiresAuth(), async (req, res, next) => {
  res.status(200).render('registrationSettings');
});

router.get('/sponsor', requiresAuth(), async (req, res, next) => {
  res.status(200).render('sponsor');
});

router.get('/teamManagement', requiresAuth(), async (req, res, next) => {
  res.status(200).render('teamManagement');
});

router.get('/teamManager', requiresAuth(), async (req, res, next) => {
  res.status(200).render('teamManager');
});

router.get('/test', requiresAuth(), async (req, res, next) => {
  res.status(200).render('test');
});

router.get('/teamSettings', requiresAuth(), async (req, res, next) => {
  res.status(200).render('teamSettings');
});

router.get('/teamView', requiresAuth(), async (req, res, next) => {
  res.status(200).render('teamView');
});

router.get('/teams', requiresAuth(), async (req, res, next) => {
  res.status(200).render('teams');
});

router.get('/roleManagement', requiresAuth(), async (req, res, next) => {
  const users = [
    { name: "Brady", role: "rol_Rtjhdoi7zz7wOjXX" },
    { name: "Derek", role: "" },
    { name: "Josh", role: "" },
    { name: "Kayla", role: "rol_Rtjhdoi7zz7wOjXX" },
    { name: "Ralph", role: "" }
  ];

  res.status(200).render('roleManagement', { users });
});

router.get('/userList', (req, res, next) => {
  res.status(200).render('userList');
});

router.get('/welcomePage', (req, res, next) => {
  res.status(200).render('welcomePage');
});

module.exports = router;
