import MapMarker from '../MapMarker'

import { useAllJobsByEmpId } from '../../hooks/useJobs'
import { Link, useParams } from 'react-router-dom'
import EmployeeNavBar from './EmployeeNavbar'

function Schedule() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useAllJobsByEmpId(Number(id))
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    return (
      <>
        <EmployeeNavBar />
        <div className="layout-schedule">
          <div className="left-content">
            <h1>Current jobs</h1>
            <ul key="schedule">
              {data.map((job) => (
                <div className="job-card-employee" key={job.id}>
                  <div className="title-employee">{job.title}</div>
                  <div className="date-employee">{job.date}</div>
                  <div className="time-employee">{job.time}</div>
                  <div className="location-employee">
                    {job.location || 'Address'}
                  </div>
                  <div className="submit-job-employee">
                    <Link to={`/jobs/employee/${id}/${job.id}`}>
                      <button>Submit Completion</button>
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <MapMarker />
        </div>
      </>
    )
  }
}
export default Schedule
