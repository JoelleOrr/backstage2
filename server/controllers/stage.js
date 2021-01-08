const Stage = require('../db/models/stage'),
  mongoose = require('mongoose');

// ***********************************************//
// Add Stage
// ***********************************************//

exports.addStage = async (req, res) => {
  try {
    const stage = new Stage({
      ...req.body,
      user: req.user._id,
    });

    await stage.save();
    res.status(201).json(stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get All Stages
// ***********************************************//

exports.getAllStages = async (req, res) => {
  try {
    const Stages = await Stage.find({ user: req.user._id });
    res.status(200).json(Stages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get One Stage
// ***********************************************//

exports.getOneStage = async (req, res) => {
  try {
    const Stage = await Stage.findOne({ _id: req.params.id });
    res.status(200).json(Stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update Stage
// ***********************************************//

exports.updateStage = async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const stage = await Stage.findOne({
      _id: req.params.id,
    });
    updates.forEach(update => (stage[update] = req.body[update]));
    await stage.save();
    res.status(200).json(stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete Stage
// ***********************************************//

exports.deleteStage = async (req, res) => {
  try {
    const stageToDelete = await Stage.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    res.status(200).send('Stage has been deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
