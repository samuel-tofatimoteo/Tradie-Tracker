import express from 'express'
import * as db from '../db/jobs'
const router = express.Router()

router.get('/manager', async (req, res) => {
  const data = await db.getJobs()
  res.json(data)
})

router.get('/manager/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getJobsById(id)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateJobs(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addJobs(data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
