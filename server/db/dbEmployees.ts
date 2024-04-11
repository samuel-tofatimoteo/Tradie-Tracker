import connection from './connection'
import knexfile from './knexfile'
import Knex from 'knex'

const db = connection

export async function getEmployeesJobs() {
  return await db('jobs').where('employees_id')
}
export function getCompJobs() {
  throw new Error('Function not implemented.')
}
export function getCompJobsById(id: number) {
  throw new Error('Function not implemented.')
}
export function updateJobs(id: number, body: any) {
  throw new Error('Function not implemented.')
}
export function updateCompJobs(id: number, body: any) {
  throw new Error('Function not implemented.')
}

export function addCompJobs(body: any) {
  throw new Error('Function not implemented.')
}
