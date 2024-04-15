import { root } from 'postcss'
import request from 'superagent'
import { Job, Jobs } from '../../models/jobs'

const rootUrl = '/api/v1/jobs'

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

export function addReview(review: string, data: Jobs) {
  const input = { review, ...data }
  return request.patch(`${rootUrl}/manager/job-list`).send(input)
}
