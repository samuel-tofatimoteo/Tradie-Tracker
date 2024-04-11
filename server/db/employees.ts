import connection from './connection'
import knexfile from './knexfile'
import Knex from 'knex'

const db = connection

export async function getEmployeesJobs() {
  return await db('jobs').where('employees_id')
}
