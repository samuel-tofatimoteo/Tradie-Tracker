import connection from './connection'
import knexfile from './knexfile'
import Knex from 'knex'

const db = connection

export async function getAllCompanies() {
  return await db('companies').select()
}

export async function getCompById(id: number) {
  return await db('companies').where(id).select().first()
}
