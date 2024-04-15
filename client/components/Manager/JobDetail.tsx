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
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    price: 0,
    complete: false,
    worked_hours: 0,
    employee_id: 0,
    client_id: 0,
    manager_id: 0,
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
          Job Title:{' '}
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
          <input
            onChange={handleChange}
            value={formState.description}
            type="text"
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
          <button>save</button>
        </form>
      </>
    )
  }
}

export default JobDetail
