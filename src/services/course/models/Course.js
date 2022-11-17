const { DataTypes } = require('sequelize');
const db = require('../../../config/database');
const Material = require('../../material/models/Material');

const Course = db.define('Course', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  name: DataTypes.STRING(50),
  description: DataTypes.STRING(255),
  level: DataTypes.ENUM('pemula', 'menengah', 'mahir'),
  category: DataTypes.STRING(20),
  thumbnail: DataTypes.STRING(255),
});

Course.hasMany(Material, { onDelete: 'CASCADE' });

module.exports = Course;
