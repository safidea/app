import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

export const templates = (t: Translation): Page => ({
  name: 'templates',
  path: t.path + '/templates',
  head: {
    title: 'Templates',
  },
  body: [header(t), footer(t)],
})
