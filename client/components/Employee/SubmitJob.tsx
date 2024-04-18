// SubmitJob.tsx

import { useParams, useNavigate } from 'react-router-dom'
import { useEditJobByEmpId } from '../../hooks/useJobs'

import { useState } from 'react'
import EmployeeNavBar from './EmployeeNavbar'

function SubmitJob() {
  const employeeId = Number(useParams().employeeId)
  const jobId = Number(useParams().jobId)
  const editJobMutation = useEditJobByEmpId()
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    employeeId: employeeId,
    jobId: jobId,
    review: '',
    worked_hours: 0,
    complete: false,
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value === 'true' }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate(`/jobs/employee/${employeeId}`)
    formState.worked_hours = Number(formState.worked_hours)
    try {
      editJobMutation.mutate(formState)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error
    }
  }

  return (
    <>
      <EmployeeNavBar />
      <div className="layout">
        <form onSubmit={handleSubmit}>
          Review:
          <input
            onChange={handleChange}
            value={formState.review}
            name="review"
            placeholder="Enter review"
            type="text"
          />
          <br />
          Worked Hours:
          <input
            onChange={handleChange}
            value={formState.worked_hours}
            type="number"
            name="worked_hours"
            placeholder="Enter worked hours"
          />
          <br />
          {/* New radio button for job completion */}
          <div>
            <label>
              <input
                type="radio"
                name="complete"
                value="true"
                checked={formState.complete === true}
                onChange={handleRadioChange}
              />
              Complete
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="complete"
                value="false"
                checked={formState.complete === false}
                onChange={handleRadioChange}
              />
              Incomplete
            </label>
          </div>
          {/* End of radio button */}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default SubmitJob
