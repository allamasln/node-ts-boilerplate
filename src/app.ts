import express from 'express'
import { pino } from 'pino'

const app = express()

const logger = pino({
  name: 'server start',
  transport: {
    target: 'pino-pretty',
    options: { colorize: true },
  },
})

app.get('/health', (req, res) => {
  res.json({
    success: true,
  })
})

export { app, logger }
