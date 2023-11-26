'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      post_id: {
        type: Sequelize.BIGINT,
        references: {
          key: "id",
          model: "Posts"
        }
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          key: "id",
          model: "Users"
        }
      },
      content: {
        type: Sequelize.TEXT
      },
      replied_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Replies');
  }
};