import express from 'express'
import * as db from '../db/dbEmployees'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await db.getEmployeesJobs()
  res.json(data)
})

export default router
