'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.addColumn('couriers', 'kode', {
    allowNull: true,
    after: 'name',
    type: Sequelize.TEXT
  })
  await queryInterface.addColumn('couriers', 'service', {
    allowNull: true,
    after: 'kode',
    type: Sequelize.TEXT
  })
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('couriers', 'kode')
  await queryInterface.removeColumn('couriers', 'service')
}
