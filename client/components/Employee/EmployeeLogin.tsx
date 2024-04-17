import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeNavBar from './EmployeeNavbar'

function EmployeeLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  return (
    <>
      <EmployeeNavBar />
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <Link to="/jobs/employee/1">
            <button>Login</button>
          </Link>
        </form>
        <p>
          Do not have an account?{' '}
          <button
            onClick={() =>
              window.open(
                'https://unsplash.com/photos/brown-brick-wall-rhaS97NhnHg',
              )
            }
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Sign up
          </button>
        </p>
      </div>
    </>
  )
}

export default EmployeeLogin
