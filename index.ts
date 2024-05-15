import App from '@safidea_/engine'
import dotenv from 'dotenv'
import { app as config } from './app'

dotenv.config()

const app = new App()
const url = await app.start(config)

console.log(`Server started at ${url}`)
