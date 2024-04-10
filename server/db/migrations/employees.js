/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('employees', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('bio')
    table.string('email')
    table.string('phone')
    table.integer('rating')
    table.integer('company_id').references('companies.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('employees')
}
