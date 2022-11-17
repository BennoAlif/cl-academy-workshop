const { Router } = require('express');
const courseService = require('../services/course/routes');
const materialService = require('../services/material/routes');

const router = Router();

router.use('/courses', courseService);
router.use('/materials', materialService);

module.exports = router;
