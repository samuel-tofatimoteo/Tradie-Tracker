import { Link, useParams } from 'react-router-dom'
import logo from '/images/logo.svg'
import bricksLogo from '/images/bricks.svg'
import notify from '/images/notify.svg'
import profile from '/images/profile.svg'

function EmployeeNavBar() {
  const { id } = useParams()
  return (
    <div className="nav-container">
      <div className="employee-bg-color">
        <div className="logo-container">
          <Link className="logo" to={`/`}>
            <img className="crane-logo" alt="logo" src={logo}></img>
            <img className="bricks-logo" alt="logo" src={bricksLogo}></img>
          </Link>
          <Link className="h1-nav-link" to={`/jobs/employee/${id}`}>
            <h1 className="h1-nav">Tradie Tracker</h1>
          </Link>
        </div>
        <div className="icon-container">
          <img className="nav-icon" alt="notify-icon" src={notify}></img>
          <img className="nav-icon" alt="profile-icon" src={profile}></img>
        </div>
      </div>
    </div>
  )
}

export default EmployeeNavBar
