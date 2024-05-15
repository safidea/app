import App from '@safidea_/engine'
import dotenv from 'dotenv'
import { config } from './config'

dotenv.config()

const app = new App()
const url = await app.start(config)

console.log(`Server started at ${url}`)
