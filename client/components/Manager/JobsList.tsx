import MapMarker from '../MapMarker'
import { useJobs } from '../../hooks/useJobs'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToggleButton'
import ManagerNavbar from './ManagerNavbar'

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
        <h1>Job List for manager component</h1>
        {data.map((job) => (
          <ul key="jobs">
            <li key={job.id}>
              {job.title}, {job.date}, {job.time}, {job.location}
              {/* needs onclick to show detail of the job */}
              <ToggleButton job={job} />
              {/* links to edit page for each job */}
              <Link to={`/jobs/manager/${job.id}`}>
                <button>edit job detail</button>
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
