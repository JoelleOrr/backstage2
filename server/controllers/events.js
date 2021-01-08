const Event = require('../db/models/events');

exports.createEvent = async (req, res) => {
  try {
    const { eventTitle, eventDate, selectedPackage } = req.body.data;
    const theEvent = new Event({
      eventTitle,
      eventDate,
      selectedPackage,
      user: req.user._id,
    });
    await theEvent.save();
    res.status(201).json(theEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const theEvents = await Event.find({ user: req.user._id });
    res.status(200).json(theEvents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params._id });
    if (!event) return res.status(404).json('Event does not exist');
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
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
