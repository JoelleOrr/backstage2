const router = require('express').Router(),
  {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvent,
    getAllEvents,
  } = require('../../controllers/events');

router.post('/', createEvent);
router.put('/:id', updateEvent);
router.get('/', getAllEvents);
router.get('/:id', getEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
