'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.renameColumn('address', 'sub_district', 'detail_address')
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.renameColumn('address', 'detail_address', 'sub_district')
}
