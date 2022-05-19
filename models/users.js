'use strict';

const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Users extends Model {
  }
  Users.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: {
          args: true,
          msg: 'Email address already in use!'
      }
  },
    password: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate : (record, options) => {
       record.password = bcrypt.hashSync(record.password, 10)
    }
  },
    sequelize
  });
  return Users;
};