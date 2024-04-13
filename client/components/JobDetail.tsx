import { useJobsById } from '../hooks/useJobs'

function JobDetail() {
  const data = useJobsById()
  console.log(data)

  return <>{data}</>
}

export default JobDetail
