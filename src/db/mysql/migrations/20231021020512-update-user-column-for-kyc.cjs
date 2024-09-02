'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'kyc_verified_at', {
    allowNull: true,
    type: Sequelize.DATE,
    after: 'email_verified_at'
  })
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'kyc_verified_at')
}
