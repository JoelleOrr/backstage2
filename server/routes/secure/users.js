const router = require('express').Router(),
  { getCurrentUser } = require('../../controllers/users');

router.get('/me', getCurrentUser);

module.exports = router;
