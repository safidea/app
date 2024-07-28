import type { App } from '@safidea_/engine'
import { config as website } from './website'
import { config as workplace } from './workplace'

export const config: App = {
  name: 'Safidea',
  tests: [...(website.tests ?? []), ...(workplace.tests ?? [])],
  pages: [...(website.pages ?? []), ...(workplace.pages ?? [])],
  tables: [...(website.tables ?? []), ...(workplace.tables ?? [])],
  automations: [...(website.automations ?? []), ...(workplace.automations ?? [])],
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
  theme: {
    fontFamily: {
      sans: 'Barlow',
    },
  },
}
