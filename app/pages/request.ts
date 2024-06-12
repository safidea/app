import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

export const request = (t: Translation): Page => ({
  name: 'request',
  path: t.path + '/request',
  head: {
    title: 'Request',
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
