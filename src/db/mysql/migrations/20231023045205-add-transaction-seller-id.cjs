'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.addColumn('transactions', 'seller_user_id', {
    allowNull: false,
    type: Sequelize.STRING(12),
    references: {
      model: 'users',
      key: 'user_id'
    },
    onUpdate: 'CASCADE',
    after: 'invoice'
  })
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('transactions', 'seller_user_id')
}
