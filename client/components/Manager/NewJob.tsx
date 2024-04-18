import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateJob } from '../../hooks/useJobs'

function NewJob() {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    complete: false,
    price: 0,
    worked_hours: 0,
    review: '',
    employee_id: 1,
    client_id: 1,
    manager_id: 1,
  })

  const mutation = useCreateJob()
  const navigate = useNavigate()
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate('/jobs/manager')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Job Title:
          <input
            name="title"
            type="text"
            value={formState.title}
            onChange={handleChange}
            placeholder="Enter job title"
          ></input>
        </label>
        <br></br>
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={formState.description}
            onChange={handleChange}
            placeholder="Enter job description"
          ></input>
        </label>
        <br></br>
        <label>
          date:
          <input
            name="date"
            type="date"
            value={formState.date}
            onChange={handleChange}
            placeholder="e.g ---"
          ></input>
        </label>
        <br></br>
        <label>
          time:
          <input
            name="time"
            type="text"
            value={formState.time}
            onChange={handleChange}
            placeholder="e.g ---"
          ></input>
        </label>
        <br></br>
        <label>
          Price:
          <input
            name="price"
            type="text"
            value={formState.price}
            onChange={handleChange}
            placeholder="e.g ---"
          ></input>
        </label>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  )
}
export default NewJob
