'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      content: {
        type: Sequelize.TEXT,
        validate: {
          max: 280,
        },
      },
      posted_at: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          key: "id",
          model: "Users"
        }
      },
      repost_id: {
        type: Sequelize.BIGINT,
        references: {
          key: "id",
          model: "Users"
        }
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
    await queryInterface.dropTable('Posts');
  }
};