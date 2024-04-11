import express from 'express'
import * as db from '../db/dbClients'

const router = express.Router()
export default router

// Client sign up account
router.post('/', async (req, res) => {
  try {
    await db.addClient(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Client account profile page
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = db.getClientById(id)
    res.json(data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Client account edit profile page
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateClient(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Client delete account
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.delClient(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Show all Clients for managers/companies
router.get('/', async (req, res) => {
  try {
    const data = db.getAllClients()
    res.json(data)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
