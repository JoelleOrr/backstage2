const router = require('express').Router(),
  { getCurrentUser, updateCurrentUser } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);

module.exports = router;
