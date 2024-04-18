import ManagerNavbar from './ManagerNavbar'
function ManagerProf() {
  return (
    <>
      <ManagerNavbar />
      <div className="layout">
        <div>
          <h1>My Profile</h1>
          <h2>Name</h2>
          <p>Michael</p>
          <h2>Bio</h2>
          <p>Bricklayer manager</p>
          <p>10 years experience</p>
          <p>Have a passion to build houses and make them stable</p>
          <h2>Email</h2>
          <p>example@gmail.com</p>
          <h2>Phone</h2>
          <p>012 345 678</p>
          <h2>Company</h2>
          <p>Builder.co.nz</p>
        </div>
      </div>
    </>
  )
}

export default ManagerProf
