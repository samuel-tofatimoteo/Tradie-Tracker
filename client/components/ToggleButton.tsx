import { useState } from 'react'
import { Job } from '../../models/jobs'

interface Props {
  job: Job
}

function ToggleButton({ job }: Props) {
  const [isShow, setIsShow] = useState(false)
  function handleToggle() {
    setIsShow(!isShow)
  }
  return (
    <>
      <button onClick={handleToggle}>
        {isShow ? 'Show less' : 'Show more'}
      </button>

      {isShow && (
        <p>
          Job Description: {job.description}
          <br></br>Price: {job.price}
          <br></br>
          Complete? {job.complete ? '⭕️' : '❌'}
        </p>
      )}
    </>
  )
}

export default ToggleButton
