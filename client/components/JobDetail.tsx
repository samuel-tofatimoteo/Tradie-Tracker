import { useState } from 'react'
import { useEditJobById, useJobById } from '../hooks/useJobs'

import { useParams, useSearchParams } from 'react-router-dom'

function JobDetail() {
  const id = Number(useParams().id)

  const { data } = useJobById(id)
  const mutation = useEditJobById()
  const [formState, setFormState] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
  }
  if (data) {
    return (
      <>
        <form>
          Job Title:{' '}
          <input
            onChange={handleChange}
            value={formState}
            type="text"
            name={data.id}
            placeholder={data.title}
          />
          <br></br>
          Due Date:
          <input
            onChange={handleChange}
            value={formState}
            type="datetime-local"
            name={data.id}
            placeholder={data.date}
          />
          <br></br>
          Location:
          <input
            onChange={handleChange}
            value={formState}
            type="text"
            name={data.id}
            placeholder={data.location}
          />
          <br></br>
          Description:
          <input
            onChange={handleChange}
            value={formState}
            type="text"
            name={data.id}
            placeholder={data.description}
          />
          <br></br>
          Quotation:
          <input
            onChange={handleChange}
            value={formState}
            type="text"
            name={data.id}
            placeholder={data.price}
          />
        </form>
      </>
    )
  }
}

export default JobDetail
