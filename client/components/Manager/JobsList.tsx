import MapMarker from '../MapMarker'
import { useJobs } from '../../hooks/useJobs'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToggleButton'
import ManagerNavbar from './ManagerNavbar'
import DeleteButton from './DeleteButton'
import Assign from './Assign'

function JobsList() {
  const { data, isLoading, isError, error } = useJobs()
  console.log(data)
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
        <div className="layout-jobList">
          <div className="left-content">
            <h1>Job List for manager component</h1>
            {data.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="title">{job.title}</div>
                <div className="date">{job.date}</div>

                <div className="time">{job.time}</div>
                <div className="location">{job.location || 'Address'}</div>
                <ToggleButton job={job} />
                <div className="edit">
                  <Link to={`/jobs/manager/${job.id}`}>
                    <button className="edit-job-btn">Edit job</button>
                  </Link>
                </div>
                <Assign id={job.id} />
                <DeleteButton id={job.id} />
                <div className="assign">
                  <button key={job.employee_id}>Employee</button>
                </div>
                <div className="date">{job.date}</div>
              </div>
            ))}
          </div>
          <MapMarker />
        </div>
      </>
    )
  }
}

export default JobsList
