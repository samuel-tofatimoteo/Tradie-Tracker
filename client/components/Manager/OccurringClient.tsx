import { useState } from 'react'

function OccurringClient() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const companies = [
    {
      id: 1,
      name: 'Costco',
      street: '123 Street',
      city: 'Auckland',
      country: 'New Zealand',
      postalCode: '2010',
      contactName: 'Name lastName',
      phone: '012-3456-7890',
      email: 'namelastname@example.com',
    },
    {
      id: 2,
      name: 'H&M',
      street: '84 Street',
      city: 'Auckland',
      country: 'New Zealand',
      postalCode: '2016',
      contactName: 'Name lastName',
      phone: '012-3456-7890',
      email: 'namelastname@example.com',
    },
    {
      id: 3,
      name: 'Company 3',
      street: '3 Street',
      city: 'Auckland',
      country: 'New Zealand',
      postalCode: '2019',
      contactName: 'Name lastName',
      phone: '012-3456-7890',
      email: 'namelastname@example.com',
    },
  ]
  //Company interface
  type Company = {
    name: string
    street: string
    city: string
    country: string
    postalCode: string
    contactName: string
    phone: string
    email: string
  }
  return (
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
              Address<br></br>
              <label>
                Street:
                <input
                  value={selectedCompany.street}
                  placeholder="E.g: 123 Main St"
                  disabled
                />
              </label>
              <label>
                City:
                <input
                  value={selectedCompany.city}
                  placeholder="E.g: Auckland"
                  disabled
                />
              </label>
              <label>
                Country:
                <input
                  value={selectedCompany.country}
                  placeholder="E.g: New Zealand"
                  disabled
                />
              </label>
              <label>
                Postal Code:
                <input
                  type="text"
                  value={selectedCompany.postalCode}
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
              Contact Number:
              <input value={selectedCompany.phone} disabled />
            </label>
          </form>
          {/* Contact Email */}
          <form>
            <label>
              Contact Email:
              <input value={selectedCompany.email} type="email" disabled />
            </label>
          </form>
        </>
      )}
    </>
  )
}
export default OccurringClient
