import React, { useState } from 'react'
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
  const [selectedEmployees, setSelectedEmployees] = useState<{
    [key: number]: number | null
  }>({})

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  const handleAssignEmployee = (jobId: number, employeeId: number | null) => {
    setSelectedEmployees((prevState) => ({
      ...prevState,
      [jobId]: employeeId,
    }))
  }

  if (data) {
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
        {data.map((job) => (
          <ul key={job.id}>
            <li>
              {job.title}, {job.date}, {job.time}, {job.location}
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
