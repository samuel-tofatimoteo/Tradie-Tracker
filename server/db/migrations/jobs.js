/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('location')
    table.string('date')
    table.string('time')
    table.boolean('complete')
    table.integer('price')
    table.string('review')
    table.integer('worked_hours')
    table.integer('employee_id').references('employees.id').notNullable
    table.integer('client_id').references('clients.id').notNullable
    table.integer('manager_id').references('employees.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('jobs')
}
