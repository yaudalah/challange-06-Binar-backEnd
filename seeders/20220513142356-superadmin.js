'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: "bossadmin",
      email:"bossadmin@gmail.com" ,
      password: bcrypt.hashSync("bossadmin", 10),
      type: "superadmin",
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
