import morgan from 'morgan'
import express from 'express'
import routes from './routes'
import { config as configEnv } from 'dotenv'
import { json, urlencoded } from 'body-parser'

configEnv()

const app = express()

app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api', routes)

startServer()

async function startServer() {
  try {
    await app.listen(process.env.PORT)
    console.log('Application Stated on Port 7070')

  } catch (err) {
    console.log('[Start Server]: ', err)
  }
}