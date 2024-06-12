import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { contacts } from './tables/contacts'
import { newContact } from './automations/newContact'
import { engineDocumentation } from './pages/engine/documentation'
import { engine } from './pages/engine'
import { request } from './pages/request'
import { template } from './pages/template'
import { system } from './pages/system'
import { translations, type Translation } from './translations'
import type { Feature } from '@safidea_/engine/feature'
import { why } from './pages/why'

const features: Feature[] = translations
  .map((t: Translation) => [
    {
      name: 'company',
      pages: [home(t), why(t)],
      tables: [contacts],
      automations: [newContact],
    },
    {
      name: 'engine',
      pages: [engine(t), engineDocumentation(t)],
    },
    {
      name: 'template',
      pages: [template(t)],
    },
    {
      name: 'request',
      pages: [request(t)],
    },
    {
      name: 'system',
      pages: [system(t)],
    },
  ])
  .flat()

export const app: App = {
  name: 'Safidea website',
  features,
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
