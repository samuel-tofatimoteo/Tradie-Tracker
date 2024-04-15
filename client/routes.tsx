import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import JobsList from './components/JobsList.tsx'
import Schedule from './components/Schedule.tsx'
import WelcomePage from './components/WelcomePage.tsx'
import JobDetail from './components/JobDetail.tsx'
import CreateJob from './components/Manager/CreateJob.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index path="/" element={<WelcomePage />} />
    <Route path="/jobs/manager" element={<JobsList />} />
    <Route path="/jobs/manager/:id" element={<JobDetail />} />
    <Route path="/create-job/manager" element={<CreateJob />} />
    <Route path="/jobs/employee" element={<Schedule />} />
  </Route>,
)
