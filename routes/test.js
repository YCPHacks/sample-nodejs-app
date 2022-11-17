/*
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
*/

const express = require('express');

const { auth, requiresAuth } = require('express-openid-connect');

const router = express.Router();

/*
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 Webapp sample Nodejs',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});
*/

router.use(
  auth({
    authorizationParams: {
      response_type: 'code',
      audience: process.env.AUDIENCE,
      scope: 'openid profile email read:messages offline_access'
    }
  })
);

router.get('/test', requiresAuth(), (req, res, next) => {
  res.status(200).send(req.oidc.user);
});

module.exports = router;
