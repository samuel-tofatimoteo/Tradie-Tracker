import express from 'express'
import * as db from '../db/employees'

const router = express.Router()

router.get('/jobs/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getEmployeeJobs(id)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateEmployeesJob(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/profile/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = await db.getEmployeesDetails(id)
    res.json(data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.patch('/profile/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateEmployeesDetails(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
