import { useJobById } from '../../hooks/useJobs'
import { useParams } from 'react-router-dom'
import Form from './Form'
import ManagerNavbar from './ManagerNavbar'

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
    return (
      <>
        <ManagerNavbar />
        <div className="layout">
          <Form {...{ data }} />
        </div>
      </>
    )
  }
}

export default JobDetail
