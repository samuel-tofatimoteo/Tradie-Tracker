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
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  //Company interface
  type Company = {
    name: string
    street: string
    city: string
    country: string
    postalCode: string
    contactName: string
    contactPhone: string
    contactEmail: string
  }
  //Company data
  const companies = [
    {
      id: 1,
      name: 'Costco',
      street: '123 Street',
      city: 'Auckland',
      country: 'New Zealand',
      postalCode: '2010',
      contactName: 'Name lastName',
      contactPhone: '012-3456-7890',
      contactEmail: 'namelastname@example.com',
    },
    {
      id: 2,
      name: 'H&M',
      street: '84 Street',
      city: 'Auckland',
      country: 'New Zealand',
      postalCode: '2016',
      contactName: 'Name lastName',
      contactPhone: '012-3456-7890',
      contactEmail: 'namelastname@example.com',
    },
    {
      id: 3,
      name: 'Company 3',
      street: '3 Street',
      city: 'Auckland',
      country: 'New Zealand',
      postalCode: '2019',
      contactName: 'Name lastName',
      contactPhone: '012-3456-7890',
      contactEmail: 'namelastname@example.com',
    },
  ]

  // Reset selected company if checkbox is unchecked
  const handleOccurringClientChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOccurringClient(event.target.checked)
    if (!event.target.checked) {
      setSelectedCompany(null)
    }
  }
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
            placeholder="Enter job title"
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
            placeholder="Enter job description"
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
          onChange={handleOccurringClientChange}
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
                  <label>
                    Street:
                    <input
                      onChange={(e) => setStreet(e.target.value)}
                      value={selectedCompany ? selectedCompany.street : street}
                      placeholder="E.g: 123 Main St"
                      disabled
                    />
                  </label>
                  <label>
                    City:
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      value={selectedCompany ? selectedCompany.city : city}
                      placeholder="E.g: Auckland"
                      disabled
                    />
                  </label>
                  <label>
                    Country:
                    <input
                      onChange={(e) => setCountry(e.target.value)}
                      value={
                        selectedCompany ? selectedCompany.country : country
                      }
                      placeholder="E.g: New Zealand"
                      disabled
                    />
                  </label>
                  <label>
                    Postal Code:
                    <input
                      type="text"
                      onChange={(e) => {
                        const value = e.target.value
                        setPostalCode(value)
                      }}
                      value={
                        selectedCompany
                          ? selectedCompany.postalCode
                          : postalCode
                      }
                      placeholder="E.g: 2016"
                      disabled
                    />
                  </label>
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
                placeholder="Enter company name"
              />
            </label>
          </form>
          {/* Address */}
          <form>
            <label>
              Address:
              {selectedCompany ? (
                <input value={selectedCompany.street} disabled />
              ) : (
                <>
                  <label>
                    Street:
                    <input
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                      placeholder="E.g: '123 Example St'"
                    />
                  </label>
                  <label>
                    City:
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      placeholder="E.g: Auckland"
                    />
                  </label>
                  <label>
                    Country:
                    <input
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      placeholder="E.g: New Zealand"
                    />
                  </label>
                  <label>
                    Postal Code:
                    <input
                      onChange={(e) => setPostalCode(e.target.value)}
                      value={postalCode}
                      placeholder="E.g: 2016"
                    />
                  </label>
                </>
              )}
            </label>
          </form>
          {/* Contact Name */}
          <form>
            <label>
              Contact Name:
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Enter contact name"
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
                placeholder="123-456-7890"
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
