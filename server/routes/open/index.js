const router = require('express').Router(),
  { createUser, loginUser } = require('../../controllers/users');

router.post('/signup', createUser);

router.post('/login', loginUser);

module.exports = router;
