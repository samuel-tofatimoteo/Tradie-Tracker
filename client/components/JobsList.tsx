import MapMarker from './MapMarker'

function JobsList() {
  const jobs = [
    {
      id: 1,
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      review: 'good',
      worked_hours: 2,
      employee_id: 1,
      client_id: 1,
      manager_id: 1,
    },
    {
      id: 2,
      title: 'title',
      description: 'something',
      location: '',
      date: 'fake date data',
      time: '10:00',
      complete: true,
      price: 100,
      review: 'good',
      worked_hours: 2,
      employee_id: 2,
      client_id: 2,
      manager_id: 1,
    },
    {
      id: 3,
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      review: 'good',
      worked_hours: 2,
      employee_id: 3,
      client_id: 3,
      manager_id: 1,
    },
  ]
  return (
    <>
      <h1>Job List for manager component</h1>
      {jobs.map((job) => (
        <ul key="jobs">
          <li key={job.id}>
            {job.title}, {job.date}, {job.time}, {job.location}{' '}
            <button key={job.employee_id}>assign employee</button>
          </li>
        </ul>
      ))}
      <MapMarker />
    </>
  )
}

export default JobsList
