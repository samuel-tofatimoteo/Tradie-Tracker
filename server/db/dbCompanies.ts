import { Companies } from '../../models/companies'
import connection from './connection'

const db = connection

export async function getCompJobs() {
  return await db('jobs').select()
}
export async function getCompJobsById(id: number) {
  const company = await db('jobs').where('id', id).select().first()
  return company
}
export async function addCompJobs() {
  return await db('jobs').insert({})
}
export async function deleteCompJobs(id: number) {
  return await db('jobs').where('id', id).del()
}
export async function updateCompJobs(id: number) {
  return await db('jobs').where('id', id).update({})
}
