const Event = require('../db/models/events');

// ***********************************************//
// Create Event
// ***********************************************//

exports.createEvent = async (req, res) => {
  const { eventTitle, eventDate } = req.body;
  try {
    const event = new Event({
      eventTitle,
      eventDate,
      user: req.user._id,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get All Events
// ***********************************************//

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user._id });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get Event
// ***********************************************//

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params._id });
    if (!event) return res.status(404).json('Event does not exist');
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ***********************************************//
// Update Event
// ***********************************************//

exports.updateEvent = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['eventTitle', 'eventDate', 'selectedPackage'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  try {
    const event = await Event.findOne({
      _id: req.params.id,
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    updates.forEach(update => (event[update] = req.body[update]));
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete Event
// ***********************************************//

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
