import { useCompletedJobs } from '../../hooks/useJobs'
import MapMarker from '../MapMarker'

export function ManagerComplete() {
  const { data, isLoading, isError, error } = useCompletedJobs()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    return (
      <>
        <h1>List of all Submitted Jobs</h1>
        <ul key="schedule">
          {data.map((job) => (
            <li key={job.id}>
              {job.title},{job.date},{job.time},{job.location},{job.employee_id}
              ,{job.review},{job.worked_hours},{job.complete}
            </li>
          ))}
        </ul>
        <MapMarker />
      </>
    )
  }
}
