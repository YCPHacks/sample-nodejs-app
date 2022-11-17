const express = require('express');

const { auth, requiresAuth } = require('express-openid-connect');

const router = express.Router();

router.use(
  auth({
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email read:messages offline_access'
    }
  })
);

router.get('/test', requiresAuth(), (req, res, next) => {
  res.status(200).send(req.oidc.user);
});

module.exports = router;
