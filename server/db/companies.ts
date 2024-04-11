import connection from './connection'
import knexfile from './knexfile'
import Knex from 'knex'

const db = connection

export async function getCompJobs() {
  return await db('jobs').where('managers_id')
}
export async function addCompJobs() {
  return await db('jobs').insert('addCompJobs')
}
