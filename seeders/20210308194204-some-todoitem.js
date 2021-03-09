"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: " Leo's cleaning",
          deadline: "today",
          important: true,
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Dan's software update",
          deadline: "tomorrow",
          important: false,
          todolistId: 2,
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
