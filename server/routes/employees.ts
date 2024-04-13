import express from 'express'
import * as db from '../db/employees'

const router = express.Router()
//manager can see the employees list created by the manager
router.get('/:managerId', async (req, res) => {
  const managerId = Number(req.params.managerId)
  try {
    const data = await db.getAllEmpByManagerId(managerId)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
})

router.patch('/:managerId/:employeeId', async (req, res) => {
  try {
    const data = req.body
    const managerId = Number(req.params.managerId)
    const employeeId = Number(req.params.employeeId) // Retrieve the correct employee ID
    await db.updateEmpByManagerId(managerId, employeeId, data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// router.get('/profile/:id', async (req, res) => {
//   try {
//     const id = Number(req.params.id)
//     const data = await db.getEmployeesDetails(id)
//     res.json(data)
//     res.sendStatus(204)
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// })

// router.patch('/profile/:id', async (req, res) => {
//   try {
//     const id = Number(req.params.id)
//     await db.updateEmployeesDetails(id, req.body)
//     res.sendStatus(204)
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// })

export default router
