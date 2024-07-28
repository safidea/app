import dotenv from 'dotenv'
dotenv.config()

import App from '@safidea_/engine'
import { config } from './config'

const app = new App()
await app.start(config)
