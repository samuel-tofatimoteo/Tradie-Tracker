import express from 'express'
import * as Path from 'node:path'

import employeesRouter from './routes/employees'
import jobsRouter from './routes/jobs'
import clientRouter from './routes/clients'

const server = express()

server.use(express.json())

server.use('/api/v1/employees', employeesRouter)
server.use('/api/v1/jobs', jobsRouter)
server.use('/api/v1/clients', clientRouter)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
