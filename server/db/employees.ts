import { Employees } from '../../models/employees'
import { Jobs } from '../../models/jobs'
import connection from './connection'

const db = connection

// Show All employees jobs
export async function getEmployeeJobs(id: number) {
  return await db('jobs').select().where('employee_id', id).first()
}

// Add review and hours after job (After manager has created job)
export async function updateEmployeesJob(id: number, data: Jobs) {
  return await db('jobs').where('employee_id', id).update(data)
}

// See employee Profile
export async function getEmployeesDetails(id: number) {
  return await db('employees').select().where({ id }).first()
}

// Employee can edit Profile
export async function updateEmployeesDetails(id: number, data: Employees) {
  return await db('employees').where({ id }).update(data)
}
