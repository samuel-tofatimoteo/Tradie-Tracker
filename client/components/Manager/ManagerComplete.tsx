import { SetStateAction, useState } from 'react'
import { useCompletedJobs } from '../../hooks/useJobs'
import MapMarker from '../MapMarker'
import Search from '../Search'

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
    const filteredData = data.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <>
        <h1>List of all Submitted Jobs</h1>
        <div>
          <Search
            search={search}
            setSearch={setSearch}
            onChange={handleSearchChange}
          />
        </div>
        <ul key="schedule">
          {filteredData.map((job) => (
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
