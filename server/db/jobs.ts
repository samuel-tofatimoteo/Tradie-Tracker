import connection from './connection'
import { Job, Jobs } from '../../models/jobs'

const db = connection

export async function getAllJobs() {
  return await db('jobs').select()
}
export async function addJobs(data: Jobs) {
  return await db('jobs').insert(data)
}
export async function deleteJobs(id: number) {
  return await db('jobs').where('id', id).del()
}
// export async function updateJobs(id: number, data: Jobs) {
//   return await db('jobs').where('id', id).update(data)
// }

export async function updateJobs(data: Job) {
  return await db('jobs').where('id', data.id).update(data)
}
export async function getCompletedJobs() {
  return await db('jobs').where('complete', true).select()
}
export async function getJob(jobId: number) {
  return await db('jobs').where('id', jobId).select().first()
}

//employees
export async function getAllJobsByEmpId(id: number) {
  return await db('jobs').where('employee_id', id)
}

export async function getJobByEmpId(employeeId: number, jobId: number) {
  return await db('jobs').where('employee_id', employeeId).where('id', jobId)
}

export async function updateJobByEmpId(
  employeeId: number,
  jobId: number,
  data: Jobs,
) {
  return await db('jobs')
    .where('employee_id', employeeId)
    .where('id', jobId)
    .update(data)
}

// OLD FUNCTIONS MIGHT DEL LATER :P

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
