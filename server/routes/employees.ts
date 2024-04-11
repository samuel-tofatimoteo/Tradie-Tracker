import express from 'express'
import * as db from '../db/employees'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await db.getEmployeesJobs()
  res.json(data)
})

export default router
