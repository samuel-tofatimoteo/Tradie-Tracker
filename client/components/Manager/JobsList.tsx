import React, { SetStateAction, useState } from 'react'
import MapMarker from '../MapMarker'
import { useJobs } from '../../hooks/useJobs'
import { Link } from 'react-router-dom'
import plus from '/images/plus.svg'
import ToggleButton from '../ToggleButton'
import submitted from '/images/submittedJobs.svg'

const employees = [
  { id: 1, name: 'Lionel Messi' },
  { id: 2, name: 'Johnnie Walker' },
  { id: 3, name: 'Lucas' },
]

function JobsList() {
  const { data, isLoading, isError, error } = useJobs()
  const [search, setSearch] = useState('')
  const [selectedEmployees, setSelectedEmployees] = useState<{
    [key: number]: number | null
  }>({})

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearch(event.target.value)
  }
  const handleAssignEmployee = (jobId: number, employeeId: number | null) => {
    setSelectedEmployees((prevState) => ({
      ...prevState,
      [jobId]: employeeId,
    }))
  }

  if (data) {
    const filteredData = data.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <>
        <Link to={`/jobs/manager/complete`}>
          <img
            className="submitted-icon"
            alt="submitted-icon"
            src={submitted}
          ></img>
        </Link>
        <Link to={`/create-job/manager`}>
          <img className="plus-icon" alt="plus-icon" src={plus}></img>
        </Link>
        <h1>Job List for manager component</h1>
        <div>
          <label htmlFor="search">
            Search jobs by job title:
            <input
              type="text"
              id="search"
              value={search}
              onChange={handleSearchChange}
            />
          </label>
        </div>
        {filteredData.map((job) => (
          <ul key={job.id}>
            <li>
              {job.title}, {job.date}, {job.time}, {job.location}
              {/* Selected employee */}
              {selectedEmployees[job.id] !== null && (
                <div>
                  Selected Employee:{' '}
                  {
                    employees.find(
                      (emp) => emp.id === selectedEmployees[job.id],
                    )?.name
                  }
                </div>
              )}
              {/* needs onclick to show detail of the job */}
              <ToggleButton job={job} />
              {/* links to edit page for each job */}
              <Link to={`/jobs/manager/${job.id}`}>
                <button>edit job detail</button>
              </Link>
              {/* Dropdown to select employee */}
              <select
                value={selectedEmployees[job.id] ?? job.employee_id}
                onChange={(e) =>
                  handleAssignEmployee(job.id, parseInt(e.target.value))
                }
              >
                <option value={null}>Select Employee</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        ))}
        <MapMarker />
      </>
    )
  }
}

export default JobsList
