const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
  const SALT_FACTOR = 244;
  if (!user.changed('password')) return;
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then((hash) => {
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phonenumber: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeUpdate: hashPassword,
      beforeCreate: hashPassword,
    },
  });

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password);
  };

  return User;
};
