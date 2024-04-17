import React, { useState } from 'react'
import NewClient from './NewClient'
import OccurringClient from './OccurringClient'
import NewJob from './NewJob'
import ManagerNavbar from './ManagerNavbar'

function CreateJobInfo() {
  const [occurringClient, setOccurringClient] = useState(false)
  // Reset selected company if checkbox is unchecked
  const handleOccurringClientChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOccurringClient(event.target.checked)
  }

  return (
    <>
      <ManagerNavbar />
      {/* Occurring Client checkbox */}
      <label>
        Occurring Client
        <input
          type="checkbox"
          checked={occurringClient}
          onChange={handleOccurringClientChange}
        />
      </label>
      <br></br>
      {/* Occurring Client TRUE or FALSE*/}
      {occurringClient && <OccurringClient />}
      {!occurringClient && <NewClient />}
      <NewJob />
    </>
  )
}

export default CreateJobInfo
