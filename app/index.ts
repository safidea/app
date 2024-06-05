import type { App } from '@safidea_/engine'
import { home } from './pages/home'

export const app: App = {
  name: 'Safidea website',
  features: [
    {
      name: 'website',
      pages: [home],
    },
  ],
  server: {
    port: '$PORT',
  },
}
