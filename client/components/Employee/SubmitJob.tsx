// SubmitJob.tsx

import { useParams } from 'react-router-dom'
import { useJobByEmpId } from '../../hooks/useJobs'
import SubmitJobForm from './SubmitJobForm'

function SubmitJob() {
  const employeeId = Number(useParams().employeeId)
  const jobId = Number(useParams().jobId)

  const { data, isLoading, isError, error } = useJobByEmpId(employeeId, jobId)

  if (isLoading) {
    return <>is loading</>
  }
  if (isError) {
    return <>error: {error}</>
  }

  if (data) {
    return <SubmitJobForm data={data} />
  }
}

export default SubmitJob
