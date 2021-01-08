const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const stageSchema = new Schema(
  {
    name: String,
    width: Number,
    depth: Number,
    isOutdoor: { type: Boolean, default: false },
    comments: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// // Format the date sent back by mongo
// taskSchema.methods.toJSON = function () {
//     const task = this;
//     const taskObject = task.toObject();
//     if (taskObject.dueDate) {
//       taskObject.dueDate = moment(taskObject.dueDate).format('YYYY-MM-DD');
//     }
//     return taskObject;
//   };

const Stage = mongoose.model('Stage', stageSchema);
module.exports = Stage;
