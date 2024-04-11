import express from 'express'
import * as db from '../db/employees'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getEmployeesJobs()
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})

export default router
