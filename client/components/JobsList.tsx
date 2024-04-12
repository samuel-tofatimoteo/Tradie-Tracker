import MapMarker from './MapMarker'
import { useJobs } from '../hooks/useJobs'
import { getJobs } from '../apis/jobs'
import { Job } from '../../models/jobs'
import { Link } from 'react-router-dom'

function JobsList() {
  const { data, isLoading, isError, error } = useJobs()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    return (
      <>
        <h1>Job List for manager component</h1>
        {data.map((job) => (
          <ul key="jobs">
            <li key={job.id}>
              {job.title}, {job.date}, {job.time}, {job.location}
              <Link to={`/jobs/manager/${job.id}`}>
                <button key={job.id}>job detail</button>
              </Link>
              <button key={job.employee_id}>assign employee</button>
            </li>
          </ul>
        ))}
        <MapMarker />
      </>
    )
  }
}

export default JobsList
