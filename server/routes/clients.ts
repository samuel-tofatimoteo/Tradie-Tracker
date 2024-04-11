import express from 'express'
import * as db from '../db/dbClients'

const router = express.Router()
export default router

// Client sign up account
router.post('/profile', async (req, res) => {
  try {
    await db.addClient(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Client account profile page
router.get('/profile/:id', async (req, res) => {
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
router.patch('/profile/:id', async (req, res) => {
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
router.delete('/profile/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.delClient(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
