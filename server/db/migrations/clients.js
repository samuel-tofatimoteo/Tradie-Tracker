/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('clients', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('company_name')
    table.string('email')
    table.string('phone')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('clients')
}
