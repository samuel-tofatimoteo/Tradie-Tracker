// SubmitJobForm.tsx
import { useState } from 'react'
import { EditJob, Job } from '../../../models/jobs'
import { useEditJobByEmpId } from '../../hooks/useJobs'
import { useParams } from 'react-router-dom'

type Props = {
  data: EditJob
  // onSubmit: any
}

function SubmitJobForm(props: Props) {
  const { data } = props
  const employeeId = Number(useParams().employeeId)
  console.log(employeeId)

  const jobId = Number(useParams().jobId)
  const editJobMutation = useEditJobByEmpId()

  const [formState, setFormState] = useState({
    // ...data,
    employeeId: employeeId,
    jobId: jobId,
    review: '', // Add review field to formState
    worked_hours: 0, // Add worked_hours field to formState
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
    console.log(typeof formState.worked_hours)
    formState.worked_hours = Number(formState.worked_hours)
    try {
      console.log(formState)
      editJobMutation.mutate(formState) // Pass formState to onSubmit function
      // You can optionally perform any additional actions after the submission, such as displaying a success message or redirecting the user
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Existing input fields */}
        ...
        {/* New input fields for review and worked hours */}
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
    </>
  )
}

export default SubmitJobForm
