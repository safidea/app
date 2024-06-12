import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

export const system = (t: Translation): Page => ({
  name: 'system',
  path: '/system',
  head: {
    title: 'System',
  },
  body: [header(t), footer(t),],
})
