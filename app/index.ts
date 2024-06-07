import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { contacts } from './tables/contacts'
import { newContact } from './automations/newContact'
import { engineDocumentation } from './pages/engine/documentation'

export const app: App = {
  name: 'Safidea website',
  features: [
    {
      name: 'landing',
      pages: [home],
      tables: [contacts],
      automations: [newContact],
    },
    {
      name: 'engine',
      pages: [engineDocumentation],
      tables: [],
      automations: [],
    },
  ],
  server: {
    port: '$PORT',
  },
  mailer: {
    host: '$MAILER_HOST',
    port: '$MAILER_PORT',
    user: '$MAILER_USER',
    pass: '$MAILER_PASS',
    from: '$MAILER_FROM',
  },
  database: {
    url: '$DATABASE_URL',
    type: '$DATABASE_TYPE',
  },
}
