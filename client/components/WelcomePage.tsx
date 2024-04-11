import { Link, Outlet } from 'react-router-dom'

function WelcomePage() {
  return (
    <>
      <div className="app">
        <Link to="/jobs/manager">
          <button className="manager-login-button">Manager</button>
        </Link>
        <Link to="/jobs/employee">
          <button className="employee-login-button">Employee</button>
        </Link>
        <Outlet />
      </div>
    </>
  )
}

export default WelcomePage
