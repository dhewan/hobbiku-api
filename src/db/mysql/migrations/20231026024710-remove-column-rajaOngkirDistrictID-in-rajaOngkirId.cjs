'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.removeColumn('rajaongkir_id', 'rajaongkir_district_id')
};

export async function down (queryInterface, Sequelize) {
  await queryInterface.addColumn('rajaongkir_id', 'rajaongkir_district_id', {
    allowNull: true,
    after: 'rajaongkir_city_id',
    type: Sequelize.STRING(16)
  })
};
