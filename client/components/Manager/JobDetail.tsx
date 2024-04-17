import { useJobById } from '../../hooks/useJobs'
import { useParams } from 'react-router-dom'
import Form from './Form'

function JobDetail() {
  const id = Number(useParams().id)

  const { data, isLoading, isError, error } = useJobById(id)

  if (isLoading) {
    return <>is loading</>
  }
  if (isError) {
    return <>error: {error}</>
  }

  if (data) {
    return <Form {...{ data }} />
  }
}

export default JobDetail
