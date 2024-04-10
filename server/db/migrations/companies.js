/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('companies', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('gst')
    table.string('web_link')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('companies')
}
