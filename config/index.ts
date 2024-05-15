import type { Config } from '@safidea_/engine'
import { home } from './pages/home'

export const config: Config = {
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
  blocks: [
    {
      ref: 'sidebar',
      component: 'Sidebar',
      title: {
        text: 'Request',
      },
      links: [
        {
          label: 'My requests',
          href: '/requests',
          prefixIcon: {
            type: 'RectangleStack',
          },
        },
      ],
    },
  ],
}
