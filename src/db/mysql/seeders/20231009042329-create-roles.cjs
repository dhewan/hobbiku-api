'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('roles', [
    {
      id: 1,
      name: 'super-admin',
      description: 'Administrator'
    },
    {
      id: 2,
      name: 'admin',
      description: 'Administrator'
    }
  ])
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('roles', null, {})
}
