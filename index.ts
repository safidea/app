import App from '@safidea_/engine'
import { config } from './config'

const app = new App()
const url = await app.start(config)

console.log(`Server started at ${url}`)
