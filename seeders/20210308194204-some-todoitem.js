"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "cleaning",
          deadline: "today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "software update",
          deadline: "tomorrow",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoitems", null, {});
  },
};
