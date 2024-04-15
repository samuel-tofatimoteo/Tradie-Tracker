import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import JobsList from './components/Manager/JobsList.tsx'
import Schedule from './components/Employee/Schedule.tsx'
import WelcomePage from './components/WelcomePage.tsx'
import JobDetail from './components/Manager/JobDetail.tsx'
import CreateJob from './components/Manager/CreateJob.tsx'
import EmployeeLogin from './components/Employee/EmployeeLogin.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index path="/" element={<WelcomePage />} />
    <Route path="/jobs/manager" element={<JobsList />} />
    <Route path="/jobs/manager/:id" element={<JobDetail />} />
    <Route path="/create-job/manager" element={<CreateJob />} />
    <Route path="/jobs/employeeLogin" element={<EmployeeLogin />} />
    <Route path="/jobs/employee/:id" element={<Schedule />} />
  </Route>,
)
