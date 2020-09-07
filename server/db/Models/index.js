const { Bio } = require('./Bios');
const { Session } = require('./Session');
const { User } = require('./User');


Session.belongsTo(User);
User.hasMany(Session);

module.exports = {
  Session,
  User,
  Bio
};
