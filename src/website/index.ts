import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { contributors } from './tables/contributors'
import { newContributor } from './automations/newContributor'
import { engine } from './pages/engine'
import { requests } from './pages/requests'
import { templates } from './pages/templates'
import { translations } from './translations'
import { why } from './pages/why'
import { follow } from './pages/follow'
import { contribute } from './pages/contribute'
import { followers } from './tables/followers'
import { homeTests } from './tests/home'

export const config: App = {
  name: 'Safidea Website',
  tests: [...homeTests],
  pages: translations
    .map((t) => [home(t), why(t), follow(t), contribute(t), engine(t), templates(t), requests(t)])
    .flat(),
  tables: [contributors, followers],
  automations: [newContributor],
}
