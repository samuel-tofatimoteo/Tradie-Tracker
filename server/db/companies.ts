import { Companies } from '../../models/companies'
import connection from './connection'
import knexfile from './knexfile'
import Knex from 'knex'

const db = connection

export async function getAllCompanies() {
  return await db('companies').select()
}
export async function getCompJobsById(id: number) {
  const company = await db('companies').select().first().where(id)
  return company as Companies
}
export async function addCompJobs() {
  return await db('jobs').insert('addCompJobs')
}
export async function deleteCompJobs() {
  return await db('jobs').del()
}
export async function updateCompJobs() {
  return await db('jobs').update('updateJobs')
}
