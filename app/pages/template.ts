import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

export const template = (t: Translation): Page => ({
  name: 'template',
  path: t.path + '/template',
  head: {
    title: 'Template',
  },
  body: [header(t), footer(t)],
})
