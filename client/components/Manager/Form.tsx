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
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  const handleAssignEmployee = (jobId: number, employeeId: number | null) => {
    // Your logic to assign the selected employee to the job
    console.log(`Assign employee ${employeeId} to job ${jobId}`)
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
          <ul key="jobs">
            <li key={job.id}>
              {job.title}, {job.date}, {job.time}, {job.location}
              {/* needs onclick to show detail of the job */}
              <ToggleButton job={job} />
              {/* links to edit page for each job */}
              <Link to={`/jobs/manager/${job.id}`}>
                <button>edit job detail</button>
              </Link>
              {/* Dropdown to select employee */}
              <select
                value={selectedEmployee ?? job.employee_id}
                onChange={(e) => setSelectedEmployee(parseInt(e.target.value))}
              >
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
              {/* Button to assign selected employee */}
              <button onClick={() => handleAssignEmployee(job.id, selectedEmployee)}>
                Assign Employee
              </button>
            </li>
          </ul>
        ))}
        <MapMarker />
      </>
    )
  }
}

export default JobsList
