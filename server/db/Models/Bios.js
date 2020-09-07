const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const {
  UUID, UUIDV4, STRING, TEXT,
} = Sequelize;
const { db } = require('../db');

const Bio = db.define('Bio', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: TEXT,
    allowNull: false,
    defaultValue: 'lorem ipsum',
  },
  poster: {
    type: STRING,
    allowNull: true,
  }
});

module.exports = { Bio };
