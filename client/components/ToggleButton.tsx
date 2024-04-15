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
        {isShow ? 'show less' : 'show more'}
      </button>

      {isShow && (
        <p>
          {job.description}, {job.price}
        </p>
      )}
    </>
  )
}

export default ToggleButton
