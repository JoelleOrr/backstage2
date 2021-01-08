const router = require('express').Router(),
  {
    addStage,
    getOneStage,
    getAllStages,
    updateStage,
    deleteStage,
  } = require('../../controllers/stage');

router.post('/', addStage);
router.get('/:id', getOneStage);
router.get('/', getAllStages);
router.put('/:id', updateStage);
router.delete('/:id', deleteStage);

module.exports = router;
