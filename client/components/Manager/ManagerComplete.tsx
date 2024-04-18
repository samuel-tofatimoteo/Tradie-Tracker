import { SetStateAction, useState } from 'react'
import { useCompletedJobs } from '../../hooks/useJobs'
import MapMarker from '../MapMarker'
import Search from '../Search'
import ManagerNavbar from './ManagerNavbar'

export function ManagerComplete() {
  const { data, isLoading, isError, error } = useCompletedJobs()

  const [search, setSearch] = useState('')

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearch(event.target.value)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }
  if (data) {
    // Filter jobs based on the job title
    data.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))

    return (
      <>
        <ManagerNavbar />
        <div className="layout-jobList">
          <div className="left-content">
            <h1>Completed Jobs</h1>
            <div>
              <Search
                search={search}
                setSearch={setSearch}
                onChange={handleSearchChange}
              />
            </div>
            <ul key="schedule">
              {data.map((job) => (
                <li key={job.id} className="complete-card">
                  <div className="title">{job.title}</div>
                  <div className="description">{job.description}</div>
                  <br />
                  <strong>Address:</strong>
                  <div className="location">{job.location}</div>
                  <div className="date">
                    <strong>Time:</strong>
                    {job.time} am
                  </div>
                  <div className="edit">
                    <strong>Shift duration:</strong> {job.worked_hours}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <MapMarker />
        </div>
      </>
    )
  }
}
