import { FormEvent, useState } from 'react'
import MapMarker from '../MapMarker'
import { useAddReview, useAllJobsByEmpId } from '../../hooks/useJobs'
import { useParams } from 'react-router-dom'

function Schedule() {
  const [formState, setFormState] = useState('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const review = e.currentTarget.value
    setFormState(review)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('')
    // mutation.mutate(review, data)
    console.log('submit function is active')
  }

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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formState}
                  placeholder="put your review"
                  name="review"
                />
                <button>submit</button>
              </form>
            </li>
          ))}
        </ul>
        <MapMarker />
      </>
    )
  }
}
export default Schedule
