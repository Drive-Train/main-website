const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const {
  UUID, UUIDV4, STRING, BOOLEAN,
} = Sequelize;
const { db } = require('../db');

const User = db.define('User', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,

  },
});

User.beforeCreate((user) => bcrypt.hash(user.password, 10)
  .then((hash) => {
    // eslint-disable-next-line no-param-reassign
    user.password = hash;
  })
  .catch((e) => {
    throw e;
  }));

module.exports = { User };
