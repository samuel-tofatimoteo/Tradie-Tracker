/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('employees').insert([
    {
      id: 1,
      name: 'Dave',
      bio: 'something',
      email: 'email.com',
      phone: '012 345 6789',
      rating: 5,
      company_id: 1,
    },
    {
      id: 2,
      name: 'Moa',
      bio: 'something',
      email: 'email.com',
      phone: '012 345 6789',
      rating: 5,
      company_id: 1,
    },
    {
      id: 3,
      name: 'Doug',
      bio: 'something',
      email: 'email.com',
      phone: '012 345 6789',
      rating: 5,
      company_id: 1,
    },
  ])
}
