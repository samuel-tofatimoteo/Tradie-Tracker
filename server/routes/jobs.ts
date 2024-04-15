import express from 'express'
import * as db from '../db/jobs'
const router = express.Router()

router.get('/manager', async (req, res) => {
  try {
    const data = await db.getJobs()
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})
//manager can get all jobs created by the manager
router.get('/manager', async (req, res) => {
  try {
    const data = await db.getAllJobs()
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})
//manager can create jobs
router.post('/manager/create', async (req, res) => {
  try {
    const data = req.body
    await db.addJobs(data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//manager can update jobs
router.patch('/manager/complete/:id', async (req, res) => {
  try {
    const data = req.body
    const id = Number(req.params.id)
    await db.updateJobs(id, data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//manager can delete the job
router.delete('/manager/complete/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//manager can get the jobs coming from the employee
router.get('/manager/complete', async (req, res) => {
  try {
    const completedJobs = await db.getCompletedJobs()
    res.json(completedJobs)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//manager can see an speficif job from the jobsList
router.get('/manager/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const job = await db.getJob(id)
    res.json(job)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

//manager can update all jobs, selecting the by job id
router.patch('/manager/:id/edit', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateJobs(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// EMPLOYEE ROUTES

//employee can see the jobs assigned to the employee
router.get('/employee/:id', async (req, res) => {
  const id = Number(req.params.id) // Extract the employee ID from req.params.id
  try {
    const data = await db.getAllJobsByEmpId(id) // Call the database function with the extracted ID
    res.json(data)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Internal Server Error' }) // Send an error response if something goes wrong
  }
})

//employee can see a specific job from the employee Schedule
router.get('/employee/:employeeId/:jobId', async (req, res) => {
  try {
    const employeeId = Number(req.params.employeeId)
    const jobsId = Number(req.params.jobId)
    const data = await db.getJobByEmpId(employeeId, jobsId)
    res.json(data)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

//employee can edit the jobs assigned to the employee
router.patch('/employee/:employeeId/:jobId', async (req, res) => {
  try {
    const employeeId = Number(req.params.employeeId)
    const jobsId = Number(req.params.jobId)
    const data = req.body
    await db.updateJobByEmpId(employeeId, jobsId, data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

//UP THERE ARE THE ROUTES THAT ARE BEEN USED IN THE APP
//manager can get the jobs created by the manager individually, by job id
router.get('/managers/:managerId/:jobsId', async (req, res) => {
  const managerId = Number(req.params.managerId)
  const jobsId = Number(req.params.jobsId)
  const data = await db.getManagersJob(managerId, jobsId)
  res.json(data)
})
//manager can update the jobs created by the manager, selecting the job by id...
router.patch('/managers/:managerId/:jobId', async (req, res) => {
  try {
    const managerId = Number(req.params.managerId)
    const jobsId = Number(req.params.jobId)
    await db.updateManagersJob(managerId, jobsId, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

//manager can create jobs
router.post('/managers', async (req, res) => {
  try {
    const data = req.body
    await db.addJobs(data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//manager can delete job selecting the job by job id
router.delete('/managers/:managerId/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//-------------------------------------------------------------------

// router.patch('/managers/:managerId/jobs/:jobId', async (req, res) => {
//   try {
//     const id = Number(req.params)
//     await db.updateJobs(id, req.body)
//     res.sendStatus(204)
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// })

//employees jobs routers
// router.get('/employees', async (req, res) => {
//   const data = await db.getJobs()
//   res.json(data)
// })

//employee can update job by job ID, going to the other page to update

export default router
