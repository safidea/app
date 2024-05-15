import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { joinUs } from './pages/joinUs'
import { workWithUs } from './pages/workWithUs'

export const app: App = {
  name: 'Safidea website',
  features: [
    {
      name: 'website',
      pages: [home, workWithUs, joinUs],
    },
  ],
  server: {
    port: '$PORT',
  },
}
