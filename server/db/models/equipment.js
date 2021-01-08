const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const equipmentSchema = new Schema(
  [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
        trim: true,
        default: 'No description provided',
      },
      quantity: {
        type: Number,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  {
    timestamps: true,
  }
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

const Equipment = mongoose.model('Equipment', equipmentSchema);
module.exports = Equipment;
