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
router.get('/managers/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getAllJobsByManager(id)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})
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
//manager can update all jobs, selecting the by job id
router.patch('/managers/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateJobs(id, req.body)
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
//employee can see the jobs assigned to the employee
router.get('/employees/:id', async (req, res) => {
  const id = Number(req.params.id) // Extract the employee ID from req.params.id
  try {
    const data = await db.getJobByEmpId(id) // Call the database function with the extracted ID
    res.json(data)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Internal Server Error' }) // Send an error response if something goes wrong
  }
})
//employee can update job by job ID, going to the other page to update
router.patch('/employees/:employeeId/:jobId', async (req, res) => {
  try {
    const managerId = Number(req.params.employeeId)
    const jobsId = Number(req.params.jobId)
    await db.updateJobByEmpId(managerId, jobsId, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
export default router
