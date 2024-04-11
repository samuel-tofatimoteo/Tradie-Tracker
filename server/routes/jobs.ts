import express from 'express'
import * as db from '../db/jobs'
const router = express.Router()

router.get('/', async (req, res) => {
  const data = await db.getJobs()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  console.log(id)
  const data = db.getJobsById(id)
  console.log(typeof data)
  console.log(data)

  res.json(data)
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    await db.addJobs()
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
