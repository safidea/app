import dotenv from 'dotenv'
dotenv.config()

import App from '@safidea_/engine'
import { app as config } from './app'

const app = new App()
await app.test(config)
