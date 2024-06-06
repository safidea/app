import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { contacts } from './tables/contacts'

export const app: App = {
  name: 'Safidea website',
  features: [
    {
      name: 'website',
      pages: [home],
      tables: [contacts]
    },
  ],
  server: {
    port: '$PORT',
  },
}
