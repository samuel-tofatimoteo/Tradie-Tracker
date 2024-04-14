import { useJobsById } from '../hooks/useJobs'

import { useParams } from 'react-router-dom'
import React from 'react'

function JobDetail() {
  const id = Number(useParams().id)

  const { data } = useJobsById(id)

  if (data) {
    return (
      <>
        {`job title: ${data.title}, due date: ${data.date}, address: ${data.location}, description: ${data.description}
        review: ${data.review}, quotation: ${data.price}`}
      </>
    )
  }
}

export default JobDetail
