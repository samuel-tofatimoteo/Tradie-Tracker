import { useState } from 'react'

function NewClient() {
  const [type, setType] = useState({
    name: '',
    street: '',
    city: '',
    country: '',
    postalCode: '',
    phone: '',
    email: '',
  })
  function handleType(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setType((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <>
      {/* Company Name */}
      <label>
        Company Name:
        <input
          name="name"
          type="text"
          value={type.name}
          onChange={handleType}
          placeholder="E.g: '123 Example St"
        ></input>
      </label>
      <br></br>
      Address:<br></br>
      <label>
        Street:
        <input
          name="street"
          type="text"
          value={type.street}
          onChange={handleType}
          placeholder="E.g: '123 Example St"
        ></input>
      </label>
      <br></br>
      <label>
        City:
        <input
          name="city"
          type="text"
          value={type.city}
          onChange={handleType}
          placeholder="E.g: Auckland"
        ></input>
      </label>
      <br></br>
      <label>
        Country:
        <input
          name="country"
          type="text"
          value={type.country}
          onChange={handleType}
          placeholder="E.g: New Zealand"
        ></input>
      </label>
      <br></br>
      <label>
        Postal Code:
        <input
          name="postalCode"
          type="text"
          value={type.postalCode}
          onChange={handleType}
          placeholder="E.g: 2016"
        ></input>
      </label>
      <br></br>
      <label>
        Contact Number:
        <input
          name="phone"
          type="text"
          value={type.phone}
          onChange={handleType}
          placeholder="123-456-7890"
        ></input>
      </label>
      <br></br>
      <label>
        Email:
        <input
          name="email"
          type="text"
          value={type.email}
          onChange={handleType}
          placeholder="example123@gmail.com"
        ></input>
      </label>
      <br></br>
    </>
  )
}

export default NewClient
