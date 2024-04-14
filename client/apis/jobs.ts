import { root } from 'postcss'
import request from 'superagent'
import { Job, Jobs } from '../../models/jobs'

const rootUrl = '/api/v1/jobs/manager'

export async function getJobs(): Promise<Job[]> {
  const res = await request.get(rootUrl)
  return res.body as Job[]
}

export async function getJobById(id: number): Promise<Job[]> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function editJobById(id: number, data: Jobs) {
  const input = { id, ...data }
  await request.patch(`rootUrl/${id}`).send(input)
}
export function addReview(review: string, data: Jobs) {
  const input = { review, ...data }
  return request.patch(rootUrl + '/job-list').send(input)
}
