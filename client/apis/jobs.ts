import { root } from 'postcss'
import request from 'superagent'
import { Job, JobReview } from '../../models/jobs'

const rootUrl = '/api/v1'

// Employee API calls

export async function getAllJobsByEmpId(id: number): Promise<Job[]> {
  const res = await request.get(`${rootUrl}/jobs/employee/${id}`)
  return res.body as Job[]
}

// OLD STUFF
export async function getJobs(): Promise<Job[]> {
  const res = await request.get(rootUrl)
  return res.body as Job[]
}

export async function getJobsById(id: number): Promise<Job[]> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export function addReview(review: string, data: Job) {
  const input = { review, ...data }
  return request.patch(rootUrl + '/job-list').send(input)
}
