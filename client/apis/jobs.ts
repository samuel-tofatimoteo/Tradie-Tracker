import { root } from 'postcss'
import request from 'superagent'
import { Job, JobReview } from '../../models/jobs'

const rootUrl = '/'

export function getJobs(): Promise<string[]> {
  return request.get(rootUrl + '/job-list').then((res) => {
    return res.body.jobs
  })
}

export function addReview(review: string, data: Job) {
  const input = { review, ...data }
  return request.patch(rootUrl + '/job-list').send(input)
}
