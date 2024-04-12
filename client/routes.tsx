import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import JobsList from './components/JobsList.tsx'
import Schedule from './components/Schedule.tsx'
import WelcomePage from './components/WelcomePage.tsx'
import JobDetail from './components/JobDetail.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index path="/" element={<WelcomePage />} />
    <Route path="/jobs/manager" element={<JobsList />} />
    <Route path="/jobs/manager/:id" element={<JobDetail />} />
    <Route path="/jobs/employee" element={<Schedule />} />
  </Route>,
)
