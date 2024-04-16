import { useState, FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { Job } from '../../../models/jobs'
import { useEditJobById } from '../../hooks/useJobs'

type Props = {
  data: Job
}

function Form(props: Props) {
  const { data } = props
  const id = Number(useParams().id)

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

  const mutation = useEditJobById()
  function handleClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
    console.log(formState)
  }

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
        Price:
        <input
          onChange={handleChange}
          value={formState.price}
          type="number"
          name="price"
          // placeholder={data.price}
        />
        <button type="submit">save</button>
      </form>
    </>
  )
}
export default Form
