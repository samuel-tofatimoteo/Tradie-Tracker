/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('clients').insert([
    {
      id: 1,
      name: 'Jack',
      company_name: 'The Warehouse',
      email: 'email.com',
      phone: '012 345 6789',
    },
    {
      id: 2,
      name: 'Sam',
      company_name: 'McDonald',
      email: 'email.com',
      phone: '012 345 6789',
    },
    {
      id: 3,
      name: 'Michael',
      company_name: 'KFC',
      email: 'email.com',
      phone: '012 345 6789',
    },
  ])
}
