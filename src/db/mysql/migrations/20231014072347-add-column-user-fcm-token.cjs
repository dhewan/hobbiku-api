'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'fcm_token', {
    allowNull: true,
    after: 'type',
    type: Sequelize.TEXT
  })
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'fcm_token')
}
