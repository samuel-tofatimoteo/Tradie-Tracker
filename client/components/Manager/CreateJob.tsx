import { useState } from 'react'

const CreateJob = () => {
  const [occurringClient, setOccurringClient] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  //Job details, always show on page
  const [jobTitle, setJobTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dateTime, setDateTime] = useState('')
  // Company details
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  //Company interface
  type Company = {
    name: string
    address: string
    contactName: string
    contactPhone: string
    contactEmail: string
  }
  //Company data
  const companies = [
    {
      name: 'Costco',
      address: 'Address 1',
      contactName: 'Contact 1',
      contactPhone: 'Phone 1',
      contactEmail: 'Email 1',
    },
    {
      name: 'H&M',
      address: 'Address 2',
      contactName: 'Contact 2',
      contactPhone: 'Phone 2',
      contactEmail: 'Email 2',
    },
    {
      name: 'Company 3',
      address: 'Address 3',
      contactName: 'Contact 3',
      contactPhone: 'Phone 3',
      contactEmail: 'Email 3',
    },
  ]

  return (
    <>
      {/* Always show */}
      {/* Job Title */}
      <form>
        <label>
          Job Title:
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder=" Enter job title"
          />
        </label>
      </form>
      {/* Description */}
      <form>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder=" Enter job description"
          />
        </label>
      </form>
      {/* Date & Time */}
      <form>
        <label>
          Date & Time:
          <input
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            type="datetime-local"
          />
        </label>
      </form>

      {/* Occurring Client checkbox */}
      <label>
        Occurring Client
        <input
          type="checkbox"
          checked={occurringClient}
          onChange={(e) => setOccurringClient(e.target.checked)}
        />
      </label>

      {/* Occurring Client TRUE */}
      {occurringClient && (
        <>
          {/* Company dropdown */}
          <select
            onChange={(e) => {
              const company = companies.find(
                (company) => company.name === e.target.value,
              )
              setSelectedCompany(company ? company : null)
            }}
            defaultValue=""
          >
            <option disabled value="">
              Select a company
            </option>
            {companies.map((company, index) => (
              <option key={index} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>

          {/* Company details */}
          {selectedCompany && (
            <>
              {/* Company Name */}
              <form>
                <label>
                  Company Name:
                  <input value={selectedCompany.name} disabled />
                </label>
              </form>
              {/* Address */}
              <form>
                <label>
                  Address:
                  <input value={selectedCompany.address} disabled />
                </label>
              </form>
              {/* Contact Name */}
              <form>
                <label>
                  Contact Name:
                  <input value={selectedCompany.contactName} disabled />
                </label>
              </form>
              {/* Contact Phone */}
              <form>
                <label>
                  Contact Phone:
                  <input value={selectedCompany.contactPhone} disabled />
                </label>
              </form>
              {/* Contact Email */}
              <form>
                <label>
                  Contact Email:
                  <input
                    value={selectedCompany.contactEmail}
                    type="email"
                    disabled
                  />
                </label>
              </form>
            </>
          )}
        </>
      )}

      {/* Occurring Client FALSE */}
      {!occurringClient && (
        <>
          {/* Company Name */}
          <form>
            <label>
              Company Name:
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder=" Enter company name"
              />
            </label>
          </form>
          {/* Address */}
          <form>
            <label>
              Address:
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder=" Enter company address"
              />
            </label>
          </form>
          {/* Contact Name */}
          <form>
            <label>
              Contact Name:
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder=" Enter contact name"
              />
            </label>
          </form>
          {/* Contact Phone */}
          <form>
            <label>
              Phone Number:
              <input
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                onKeyDown={(e) => {
                  // Allow: backspace, delete, tab, escape, enter
                  if (
                    ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(
                      e.key,
                    ) ||
                    // Allow: Ctrl+A/Ctrl+C/Ctrl+X
                    (e.key === 'a' && e.ctrlKey === true) || // A
                    (e.key === 'c' && e.ctrlKey === true) || // C
                    (e.key === 'x' && e.ctrlKey === true) // X
                  ) {
                    // Let it happen, don't do anything
                    return
                  }
                  // Ensure that it is a number and stop the keypress
                  if (
                    (e.shiftKey || e.key < '0' || e.key > '9') &&
                    (e.key < '0' || e.key > '9')
                  ) {
                    e.preventDefault()
                  }
                }}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder=" 123-456-7890"
                required
              />
            </label>
          </form>
          {/* Contact Email */}
          <form>
            <label>
              Email:
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="example123@gmail.com"
                required
              />
            </label>
          </form>
        </>
      )}

      {/* Submit button */}
      <button>Submit</button>
    </>
  )
}

export default CreateJob
