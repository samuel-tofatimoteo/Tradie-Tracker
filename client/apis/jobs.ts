// import { root } from 'postcss'
import request from 'superagent'
import { ApiInput, EditJob, Job, Jobs } from '../../models/jobs'

const rootUrl = '/api/v1/jobs'

// Employee API calls

export async function getAllJobsByEmpId(id: number) {
  const res = await request.get(`${rootUrl}/employee/${id}`)
  return res.body as Job[]
}

export async function getJobByEmpId(employeeId: number, jobId: number) {
  const res = await request.get(`${rootUrl}/employee/${employeeId}/${jobId}`)
  return res.body
}

export async function editJobByEmpId(input: ApiInput) {
  const employeeId = input.employeeId
  console.log(employeeId)

  const jobId = input.jobId
  const data = {
    review: input.review,
    worked_hours: input.worked_hours,
    complete: input.complete,
  }
  console.log(employeeId, jobId, data)
  await request.patch(`${rootUrl}/employee/${employeeId}/${jobId}`).send(data)
}

// OLD STUFF
export async function getJobs(): Promise<Job[]> {
  const res = await request.get(`${rootUrl}/manager`)
  return res.body as Job[]
}

export async function getJobById(id: number) {
  const res = await request.get(`${rootUrl}/manager/${id}`)
  return res.body
}

export async function editJobById(input: Job) {
  const id = input.id
  await request.patch(`${rootUrl}/manager/${id}`).send(input)
}

// export async function editJobById(id: number, data: Jobs) {
//   // const id = input.id
//   await request.patch(`${rootUrl}/manager/${id}`).send(data)
// }

export function addReview(review: string, data: Jobs) {
  const input = { review, ...data }
  return request.patch(`${rootUrl}/manager/job-list`).send(input)
}

export async function createJob(data: Jobs) {
  await request.post(`${rootUrl}/manager`).send(data)
}

export async function getCompletedJobs() {
  const res = await request.get(`${rootUrl}/manager/complete`)
  return res.body as Job[]
}
