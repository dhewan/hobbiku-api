'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.changeColumn('product_configs', 'product_id', {
    allowNull: false,
    field: 'product_id',
    type: Sequelize.INTEGER(11),
    unique: true
  })
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.changeColumn('product_configs', 'product_id', {
    allowNull: false,
    field: 'product_id',
    type: Sequelize.INTEGER(11)
  })
}
