import request from 'superagent'

const rootUrl = '/'

export function getJobs(): Promise<string[]> {
  return request.get(rootUrl + '/job-list').then((res) => {
    return res.body.jobs
  })
}
