/* eslint-disable camelcase */
const httpCodes = require('../../../utils/httpCodes');
const response = require('../../../utils/response');
const Course = require('../../course/models/Course');
const Material = require('../models/Material');

module.exports = {
  async createMaterial(req, res) {
    try {
      const { title, videoUrl, courseId } = req.body;

      const course = await Course.findByPk(courseId);
      if (!course) {
        return response(res, httpCodes.NOT_FOUND, 'Course not found', null);
      }

      const newMaterial = await Material.create({
        title,
        videoUrl,
        CourseId: courseId,
      });

      return response(res, httpCodes.CREATED, 'Material created', newMaterial);
    } catch (error) {
      return response(
        res,
        httpCodes.INTERNAL_SERVER_ERROR,
        error.message,
        null,
      );
    }
  },
};
