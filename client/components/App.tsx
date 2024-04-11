import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      {/*  Navbar */}
      <div className="app">
        <Link to="/manager/job-list">
          <button className="manager-login-button">Manager</button>
        </Link>
        <Link to="/employee/schedule">
          <button className="employee-login-button">Employee</button>
        </Link>
        <Outlet />
      </div>
    </>
  )
}

export default App
