export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()

  // Inserts seed entries
  await knex('jobs').insert([
    {},
    { id: 2, name: 'apple' },
    { id: 3, name: 'feijoa' },
  ])
}
