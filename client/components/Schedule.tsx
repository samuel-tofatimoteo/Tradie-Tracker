import { FormEvent, useState } from 'react'
import MapMarker from './MapMarker'
import { useAddReview, useAllJobsByEmpId } from '../hooks/useJobs'
import { useParams } from 'react-router-dom'

function Schedule() {
  // const jobs = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     description: 'something',
  //     location: '',
  //     date: '11 July 2024',
  //     time: '10:00',
  //     complete: false,
  //     price: 100,
  //     review: 'good',
  //     worked_hours: 2,
  //     employee_id: 1,
  //     client_id: 1,
  //     manager_id: 1,
  //   },
  //   {
  //     id: 2,
  //     title: 'title',
  //     description: 'something',
  //     location: '',
  //     date: 'fake date data',
  //     time: '10:00',
  //     complete: true,
  //     price: 100,
  //     review: 'good',
  //     worked_hours: 2,
  //     employee_id: 2,
  //     client_id: 2,
  //     manager_id: 1,
  //   },
  //   {
  //     id: 3,
  //     title: 'title',
  //     description: 'something',
  //     location: '',
  //     date: '11 July 2024',
  //     time: '10:00',
  //     complete: false,
  //     price: 100,
  //     review: 'good',
  //     worked_hours: 2,
  //     employee_id: 3,
  //     client_id: 3,
  //     manager_id: 1,
  //   },
  // ]

  // const mutation = useAddReview()
  // const data = jobs[0]
  // const [formState, setFormState] = useState({
  //   review: '',
  //   data: {
  //     id: jobs[0].id,
  //     title: jobs[0].title,
  //     description: jobs[0].description,
  //     location: jobs[0].location,
  //     date: jobs[0].date,
  //     time: jobs[0].time,
  //     complete: false,
  //     price: 0,
  //     worked_hours: 0,
  //     employee_id: jobs[0].employee_id,
  //     client_id: jobs[0].client_id,
  //     manager_id: jobs[0].manager_id,
  //   },
  // })

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
