'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.changeColumn('users', 'phone_number', {
    allowNull: true,
    type: Sequelize.STRING(15),
    unique: true
  })
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.changeColumn('users', 'phone_number', {
    allowNull: true,
    type: Sequelize.STRING(15)
  })
}
