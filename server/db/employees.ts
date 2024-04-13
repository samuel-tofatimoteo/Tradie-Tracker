import { Employee, Employees } from '../../models/employees'
import { Jobs } from '../../models/jobs'
import connection from './connection'

const db = connection

// // Show All employees jobs
// export async function getEmployeeJobs(id: number) {
//   return await db('jobs').select().where('employee_id', id).first()
// }

// // Add review and hours after job (After manager has created job)
// export async function updateEmployeesJob(id: number, data: Jobs) {
//   return await db('jobs').where('employee_id', id).update(data)
// }

//manager can see all the employees that the manager created
//it's a join table, looking at manager_id in the jobs table, and the employee id in the employee table.
export async function getAllEmpByManagerId(managerId: number) {
  console.log('Received managerId:', managerId)
  return await db('employees')
    .select()
    .join('jobs', 'employees.id', 'jobs.employee_id')
    .where('jobs.manager_id', managerId)
}

// Employee can edit Profile
// export async function updateEmpByManagerId(managerId: number, data: Employees) {
//   return await db('employees')
//     .select()
//     .join('jobs', 'employees.id', 'jobs.employee_id')
//     .where('jobs.manager_id', managerId)
//     .update(data)
// }
export async function updateEmpByManagerId(
  managerId: number,
  employeeId: number,
  data: Employees,
) {
  console.log('manager:', managerId, 'employee:', employeeId, 'data:', data)
  return await db('employees')
    .where('id', employeeId) // Filter based on employee ID only
    .update(data)
}
