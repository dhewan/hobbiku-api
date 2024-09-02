'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.addColumn('balance_sale_withdraws', 'withdraw_code', {
    after: 'id',
    allowNull: false,
    type: Sequelize.STRING(12),
    unique: true
  })

}
export async function down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('balance_sale_withdraws', 'withdraw_code')
}
