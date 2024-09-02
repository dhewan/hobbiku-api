'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.renameColumn('couriers', 'kode', 'code')
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.renameColumn('couriers', 'code', 'kode')
}
