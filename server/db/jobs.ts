import connection from './connection'
import { Job, Jobs } from '../../models/jobs'

const db = connection

export async function getManagersJob(managerId: number, jobId: number) {
  return await db('jobs')
    .where('manager_id', managerId)
    .where('id', jobId)
    .select()
}

export async function updateManagersJob(
  managerId: number,
  jobId: number,
  data: Jobs,
) {
  return await db('jobs')
    .where('manager_id', managerId)
    .where('id', jobId)
    .update(data)
}

export async function getJobsById(id: number) {
  return await db('jobs').select().where('manager_id', id)
}
export async function addJobs(data: Jobs) {
  return await db('jobs').insert(data)
}
export async function deleteJobs(id: number) {
  return await db('jobs').where('id', id).del()
}
export async function updateJobs(id: number, data: Jobs) {
  return await db('jobs').where('id', id).update(data)
}
