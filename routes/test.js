const express = require('express');

const { auth } = require('express-openid-connect');

const router = express();

router.use(
  auth({
    authorizationParams: {
      response_type: 'code'
    }
  })
);

router.get('/test', async (req, res) => {
  const userInfo = await req.oidc.fetchUserInfo();

  res.status(200).send(`<pre>${userInfo}</pre>`);
});

module.exports = router;
