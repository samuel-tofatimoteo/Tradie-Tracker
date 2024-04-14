import { useState } from 'react'

function CreateJob() {
  const [occuringClient, setOccuringClient] = useState(false)

  const handleCheckboxChange = (event) => {
    setOccuringClient(event.target.checked)
  }

  return (
    <>
      {/* Job Title */}
      <form>
        <label>
          Job Title
          <input placeholder="E.g: Software Developer" />
        </label>
      </form>
      {/* Job Description */}
      <form>
        <label>
          Job Description
          <textarea placeholder="E.g: Develop software applications." />
        </label>
      </form>
      {/* Date & time */}
      <form>
        <label>
          Date & Time
          <input type="datetime-local" />
        </label>
      </form>
      {/* Occurring Client */}
      <label>
        Occurring Client?
        <input
          type="checkbox"
          name="Occurring Client"
          checked={occuringClient}
          onChange={handleCheckboxChange}
        />
      </label>
      {/* Occurring Client TRUE */}
      {occuringClient && (
        <select>
          <option value="someOption">Company</option>
          <option value="otherOption">Other option</option>
        </select>
      )}
      {/* Occurring Client FALSE */}
      {!occuringClient && (
        <>
          {/* Company Name */}
          <form>
            <label>
              Company Name
              <input placeholder="E.g: Costco" />
            </label>
          </form>
          {/* Address */}
          <form>
            <label>
              Address
              <input placeholder="E.g: 1234 Main St, Vancouver, BC" />
            </label>
          </form>
          {/* Contact Name */}
          <label>
            Contact Name
            <input placeholder="E.g: John Doe" />
          </label>
          {/* Contact Phone */}
          <form>
            <label>
              Contact Phone
              <input placeholder="E.g: 123-456-7890" />
            </label>
          </form>
          {/* Contact Email */}
          <form>
            <label>
              Contact Email
              <input placeholder="E.g: john.doe@example.com" type="email" />
            </label>
          </form>
          {/* Submit button */}
          <button>Submit</button>
        </>
      )}
    </>
  )
}

export default CreateJob
