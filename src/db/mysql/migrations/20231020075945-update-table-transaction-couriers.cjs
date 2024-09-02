'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.renameColumn('transaction_couriers', 'delivery_fee', 'shipping_fee')
};

export async function down (queryInterface, Sequelize) {
  await queryInterface.renameColumn('transaction_couriers', 'shipping_fee', 'delivery_fee')
};
