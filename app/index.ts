import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { contacts } from './tables/contacts'
import { newContact } from './automations/newContact'

export const app: App = {
  name: 'Safidea website',
  features: [
    {
      name: 'website',
      pages: [home],
      tables: [contacts],
      automations: [newContact],
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
}
