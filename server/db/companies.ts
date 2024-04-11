import { Companies } from '../../models/companies'
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
export async function deleteCompJobs() {
  return await db('jobs').del()
}
export async function updateCompJobs() {
  return await db('jobs').update('updateJobs')
}
export async function getCompJobsById(id: number | string) {
  const company = await db('companies').select().first().where({ id })
  return company as Companies
}
