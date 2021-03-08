"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todolists",
      [
        { name: "personal list", createdAt: new Date(), updatedAt: new Date() },
        { name: "office list", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todolists", null, {});
  },
};
