import { Link } from 'react-router-dom'

function NotificationPage() {
  return (
    <>
      <div className="layout">
        <h1>There are no notifications</h1>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
      </div>
    </>
  )
}

export default NotificationPage
