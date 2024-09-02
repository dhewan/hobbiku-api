'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.renameTable('product_whislists', 'product_wishlists')
}
export async function down (queryInterface, Sequelize) {
  await queryInterface.renameTable('product_wishlists', 'product_whislists')
}
