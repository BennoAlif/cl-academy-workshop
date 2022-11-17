const { DataTypes } = require('sequelize');
const db = require('../../../config/database');

const Material = db.define('Material', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  title: DataTypes.STRING(50),
  videoUrl: DataTypes.STRING(255),
});

module.exports = Material;
