import { Jobs } from '../../models/jobs'
import connection from './connection'

const db = connection

export async function getEmployeesJobs() {
  return await db('jobs').where('employees_id').select()
}
export async function getEmployeeJobById(id: number) {
  return await db('jobs').select().where('employee_id', id).first()
}
export async function updateJobs(id: number, data: Jobs) {
  return await db('jobs').where('employee_id', id).update(data)
}
