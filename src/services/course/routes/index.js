const { Router } = require('express');
const CourseController = require('../controllers/CourseController');

const router = Router();
router.post('/', CourseController.createCourse);
router.get('/', CourseController.getAllCourses);
router.get('/:id', CourseController.getCourseById);

module.exports = router;
