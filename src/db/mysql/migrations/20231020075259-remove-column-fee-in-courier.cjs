'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.removeColumn('couriers', 'delivery_fee')
};

export async function down (queryInterface, Sequelize) {
  await queryInterface.addColumn('couriers', 'delivery_fee', {
    allowNull: false,
    type: Sequelize.INTEGER(11),
    defaultValue: 0,
    after: 'name'
  })
};
