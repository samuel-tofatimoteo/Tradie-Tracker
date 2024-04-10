/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('companies').insert([
    {
      id: 1,
      name: 'Fair field',
      gst: '333-555-777',
      web_link: 'google.com',
    },
    {
      id: 2,
      name: 'Mitre 10',
      gst: '333-555-777',
      web_link: 'google.com',
    },
    {
      id: 3,
      name: 'Bunnings',
      gst: '333-555-777',
      web_link: 'google.com',
    },
  ])
}
