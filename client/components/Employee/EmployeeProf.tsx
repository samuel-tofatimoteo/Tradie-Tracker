import EmployeeNavBar from './EmployeeNavbar'

function EmployeeProf() {
  return (
    <>
      <EmployeeNavBar />
      <div className="layout">
        <div>
          <h1>Profile</h1>
          <h2>Name</h2>
          <p>Sam</p>
          <h2>Bio</h2>
          <p>Bricklayer</p>
          <p>4 years experience</p>
          <p>Have a passion to build houses</p>
          <h2>Email</h2>
          <p>sammy2tz@gmail.com</p>
          <h2>Phone</h2>
          <p>021 685 685 685</p>
          <h2>Company</h2>
          <p>Big boy Builders.co</p>
        </div>
      </div>
    </>
  )
}

export default EmployeeProf
