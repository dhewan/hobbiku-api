'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('users', [
    {
      user_id: '000000000000',
      username: 'hobbiku.official',
      email: 'hobbiku.ofc@gmail.com',
      email_verified_at: new Date(),
      gender: 'male',
      status: 'active',
      type: 'dev'
    }
  ])
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {})
}
