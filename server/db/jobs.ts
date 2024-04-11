import connection from './connection'

const db = connection

export async function getJobs() {
  return await db('jobs').select()
}
export async function getJobsById(id: number) {
  return await db('jobs').select().where({ id }).first()
}
export async function addJobs() {
  return await db('jobs').insert({})
}
export async function deleteJobs(id: number) {
  return await db('jobs').where('id', id).del()
}
export async function updateJobs(id: number) {
  return await db('jobs').where('id', id).update({})
}
