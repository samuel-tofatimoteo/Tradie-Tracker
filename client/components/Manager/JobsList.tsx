import MapMarker from '../MapMarker'
import { useJobs } from '../../hooks/useJobs'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToggleButton'
import ManagerNavbar from './ManagerNavbar'
import DeleteButton from './DeleteButton'
import Assign from './Assign'

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
        <ManagerNavbar />
        <h1>Job Dashboard</h1>
        {data.map((job) => (
          <ul key="jobs">
            <li key={job.id}>
              {job.title}, {job.date}, {job.time}, {job.location}
              <ToggleButton job={job} />
              <Link to={`/jobs/manager/${job.id}`}>
                <button>Edit job detail</button>
              </Link>
              <Assign id={job.id} />
              <DeleteButton id={job.id} />
            </li>
          </ul>
        ))}
        <MapMarker />
      </>
    )
  }
}

export default JobsList
