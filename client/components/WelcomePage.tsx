import { Link, Outlet } from 'react-router-dom'

function WelcomePage() {
  return (
    <>
      <div className="layout">
        <div className="header">
          <h1 className="welcome-heading">Welcome to Tradie Tracker!</h1>
        </div>
        <h2 className="welcome-text">Hammering Out Efficiency</h2>
        <h3 className="I-am-text">I am:</h3>
        <div className="welcome">
          <Link to="/jobs/manager">
            <button className="manager login-button">Manager</button>
          </Link>
          <Link to="/jobs/employeeLogin">
            <button className="employee login-button">Employee</button>
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default WelcomePage
