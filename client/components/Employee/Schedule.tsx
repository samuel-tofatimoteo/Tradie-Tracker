import { FormEvent, useState } from 'react'
import MapMarker from '../MapMarker'
import { useAllJobsByEmpId } from '../../hooks/useJobs'
import { Link, useParams } from 'react-router-dom'

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
    console.log(data)
    return (
      <>
        <h1>Job List for each employee - just named schedule for now</h1>
        <ul key="schedule">
          {data.map((job) => (
            <li key={job.id}>
              {job.title}, {job.date}, {job.time}, {job.location}
              <Link to={`/jobs/employee/${id}/${job.id}`}>
                <button>Submit Job</button>
              </Link>
            </li>
          ))}
        </ul>
        <MapMarker />
      </>
    )
  }
}
export default Schedule
