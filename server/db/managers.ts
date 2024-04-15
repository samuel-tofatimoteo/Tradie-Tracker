import connection from './connection'
import { Managers } from '../../models/managers'
import { Job, Jobs } from '../../models/jobs'
import { Employees } from '../../models/employees'

const db = connection

//manager can get the employees details
export async function getManagerDetails(id: number) {
  return await db('employees').select().where({ id }).first()
}
//manager can update employees details
export async function updateManagerDetails(id: number, data: Employees) {
  return await db('employees').where({ id }).update(data)
}
//manager can delete employees details
export async function deleteEmployee(id: number) {
  return await db('employees').where('manager_id', id).del()
}
//manager can add employees details
export async function addEmployee(data: Job) {
  return await db('employees').insert(data)
}
//manager can create jobs
export async function addJobs(data: Job) {
  return await db('jobs').insert(data)
}
//manager can delete jobs
export async function deleteJobs(id: number) {
  return await db('jobs').where('manager_id', id).del()
}
//manager can update jobs
export async function updateJobs(id: number, data: Jobs) {
  return await db('jobs').where('imanager_id', id).update(data)
}
//manager can see the jobs created by the manager
export async function getJobsById(id: number) {
  return await db('jobs').select().where('manager_id', id).first()
}
