const express = require('express');

const { auth } = require('express-openid-connect');

const router = express();

router.use(
  auth({
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email read:messages offline_access'
    }
  })
);

router.get('/test', /* requiresAuth(),*/ async (req, res, next) => {
  const userInfo = await req.oidc.fetchUserInfo();

  res.status(200).render('test', { userInfo });
});

module.exports = router;
