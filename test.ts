import dotenv from 'dotenv'
dotenv.config()

import App from '@safidea_/engine'
import { app as config } from './app'

const app = new App()
const errors = await app.test(config)

if (errors.length) {
  console.error(errors)
  process.exit(1)
} else {
  console.log('Tests passed')
  process.exit(0)
}
