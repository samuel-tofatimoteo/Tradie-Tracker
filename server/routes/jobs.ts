import express from 'express'
import * as db from '../db/jobs'
const router = express.Router()

router.get('/managers/:managerId/:jobsId', async (req, res) => {
  const managerId = Number(req.params.managerId)
  const jobsId = Number(req.params.jobsId)
  const data = await db.getManagersJob(managerId, jobsId)
  res.json(data)
})

router.patch('/managers/:managerId/jobs/:jobId', async (req, res) => {
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

//-------------------------------------------------------------------
router.get('/managers/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getJobsById(id)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})
router.patch('/managers/:managerId/jobs/:jobId', async (req, res) => {
  try {
    const id = Number(req.params)
    await db.updateJobs(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

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
router.delete('/managers/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
//employees jobs routers
// router.get('/employees', async (req, res) => {
//   const data = await db.getJobs()
//   res.json(data)
// })
router.get('/employees/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getJobsById(id)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})

router.patch('/employees/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateJobs(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
