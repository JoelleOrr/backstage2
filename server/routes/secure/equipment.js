const router = require('express').Router(),
  {
    addEquipItem,
    getEquipItem,
    getAllEquip,
    updateEquipItem,
    deleteEquipItem,
  } = require('../../controllers/equipment');

router.post('/', addEquipItem);
router.get('/:id', getEquipItem);
router.get('/', getAllEquip);
router.put('/:id', updateEquipItem);
router.delete('/:id', deleteEquipItem);

module.exports = router;
