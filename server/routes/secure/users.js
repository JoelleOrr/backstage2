const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);

router.patch('/me', updateCurrentUser);

router.post('/logout', logoutUser);

router.post('/logoutall', logoutAllDevices);

module.exports = router;
