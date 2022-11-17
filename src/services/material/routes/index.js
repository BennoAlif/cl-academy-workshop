const { Router } = require('express');
const MaterialController = require('../controllers/MaterialController');

const router = Router();
router.post('/', MaterialController.createMaterial);

module.exports = router;
