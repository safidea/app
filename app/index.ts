import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { contributors } from './tables/contributors'
import { newContributor } from './automations/newContributor'
import { engine } from './pages/engine'
import { requests } from './pages/requests'
import { templates } from './pages/templates'
import { translations, type Translation } from './translations'
import type { Feature } from '@safidea_/engine/feature'
import { why } from './pages/why'
import { follow } from './pages/follow'
import { contribute } from './pages/contribute'
import { followers } from './tables/followers'

const features: Feature[] = translations
  .map((t: Translation) => [
    {
      name: 'company',
      pages: [home(t), why(t)],
    },
    {
      name: 'follow',
      pages: [follow(t)],
      tables: [followers],
    },
    {
      name: 'contribute',
      pages: [contribute(t)],
      tables: [contributors],
      automations: [newContributor],
    },
    {
      name: 'engine',
      pages: [engine(t)],
    },
    {
      name: 'templates',
      pages: [templates(t)],
    },
    {
      name: 'requests',
      pages: [requests(t)],
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
