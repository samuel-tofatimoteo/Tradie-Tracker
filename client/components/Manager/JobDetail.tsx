import { FormEvent, useState } from 'react'
import { useEditJobById, useJobById } from '../../hooks/useJobs'

import { useParams } from 'react-router-dom'

function JobDetail() {
  const id = Number(useParams().id)

  const { data, isLoading, isError, error } = useJobById(id)
  console.log(data)

  const mutation = useEditJobById()
  const [formState, setFormState] = useState({
    id: id,
    title: data.title,
    description: data.description,
    location: data.location,
    date: data.date,
    time: data.time,
    price: data.price,
    complete: data.complete,
    worked_hours: data.worked_hours,
    employee_id: data.employee_id,
    client_id: data.client_id,
    manager_id: data.manager_id,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  if (isLoading) {
    return <>is loading</>
  }
  if (isError) {
    return <>error: {error}</>
  }

  function handleClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
  }

  if (data) {
    return (
      <>
        <form onSubmit={handleClick}>
          Job Title:
          <input
            id="title"
            onChange={handleChange}
            value={formState.title}
            type="text"
            name="title"
            placeholder={data.title}
          />
          <br></br>
          Due Date:
          <input
            onChange={handleChange}
            value={formState.date}
            // type="datetime-local"
            type="text"
            name="date"
            placeholder={data.date}
          />
          <br></br>
          Location:
          <input
            onChange={handleChange}
            value={formState.location}
            type="text"
            name="location"
            placeholder={data.location}
          />
          <br></br>
          Description:
          <textarea
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            value={formState.description}
            name="description"
            placeholder={data.description}
          />
          <br></br>
          Quotation:
          <input
            onChange={handleChange}
            value={formState.price}
            type="text"
            name="price"
            placeholder={data.price}
          />
          <button type="submit">save</button>
        </form>
      </>
    )
  }
}

export default JobDetail
