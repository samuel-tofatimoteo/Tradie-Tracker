import express from 'express'
import * as db from '../db/dbCompanies'
const router = express.Router()

router.get('/', async (req, res) => {
  const data = await db.getCompJobs()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const data = db.getCompJobsById(id)
  res.json(data)
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateCompJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    await db.addCompJobs()
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteCompJobs(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
