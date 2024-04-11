import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import JobsList from './components/JobsList.tsx'
import Schedule from './components/Schedule.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/manager/job-list" element={<JobsList />} />
    <Route path="/employee/schedule" element={<Schedule />} />
  </Route>,
)
