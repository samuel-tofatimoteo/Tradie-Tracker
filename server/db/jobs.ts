import connection from './connection'
import { Job, Jobs } from '../../models/jobs'

const db = connection

export async function getJobs() {
  return await db('jobs').select()
}
export async function getJobsById(id: number) {
  return await db('jobs').select().where({ id }).first()
}
export async function addJobs(data: Job) {
  return await db('jobs').insert(data)
}
export async function deleteJobs(id: number) {
  return await db('jobs').where('id', id).del()
}
export async function updateJobs(id: number, data: Jobs) {
  return await db('jobs').where('id', id).update(data)
}
