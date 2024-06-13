import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

export const requests = (t: Translation): Page => ({
  name: 'requests',
  path: t.path + '/requests',
  head: {
    title: 'Requests',
  },
  body: [
    header(t),
    {
      component: 'Hero',
      title: {
        text: '',
      },
      paragraph: {
        text: '',
      },
      buttons: [
        {
          label: '',
          href: '',
        },
      ],
    },
    footer(t),
  ],
})
