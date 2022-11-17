const httpCodes = require('../../../utils/httpCodes');
const response = require('../../../utils/response');
const Material = require('../../material/models/Material');
const Course = require('../models/Course');

module.exports = {
  async createCourse(req, res) {
    try {
      const {
        name, description, level, category, thumbnail,
      } = req.body;

      const newCourse = await Course.create({
        name,
        description,
        level,
        category,
        thumbnail,
      });

      return response(res, httpCodes.CREATED, 'Course created successfully', newCourse);
    } catch (error) {
      return response(res, httpCodes.INTERNAL_SERVER_ERROR, error.message, null);
    }
  },
  async getAllCourses(req, res) {
    try {
      const courses = await Course.findAll();
      return response(res, httpCodes.OK, 'Get all courses', courses);
    } catch (error) {
      return response(res, httpCodes.INTERNAL_SERVER_ERROR, error.message, null);
    }
  },
  async getCourseById(req, res) {
    try {
      const { id } = req.params;

      const course = await Course.findByPk(id, { include: [{ model: Material }] });

      if (!course) {
        return response(res, httpCodes.NOT_FOUND, 'course not found', null);
      }

      return response(res, httpCodes.OK, 'course found', course);
    } catch (error) {
      return response(res, httpCodes.INTERNAL_SERVER_ERROR, error.message, null);
    }
  },
};
