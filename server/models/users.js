// Node Module used for DB queries ( https://www.npmjs.com/package/sequelize )
const sequelize = require('sequelize');
// Including db.js which contains the database configuration
const db = require('../config/db');
// Creating Table with name users
module.exports = db.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER,
  },
  name: {
    type: sequelize.STRING, // Type of column
  },
  email: {
    type: sequelize.STRING, // Type of column
  },
  age: {
    type: sequelize.STRING, // Type of column
  },
  password: {
    type: sequelize.STRING, // Type of column
  },
});