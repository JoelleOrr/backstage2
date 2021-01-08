const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      trim: true,
    },
    eventDate: String,
    selectedPackage: Object,
    comments: String,
    hasBeenOpened: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
