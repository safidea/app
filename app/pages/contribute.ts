import type { Page } from '@safidea_/engine/page'
import { footer } from './components/footer'
import { header } from './components/header'
import type { Translation } from '../translations'
import { head } from './components/head'

export const contribute = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/contribute',
  head: {
    title: t.contribute.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.contribute.pageDescription,
      },
    ],
    links: head?.links,
  },
  body: [
    header(t),
    {
      component: 'Form',
      title: {
        text: t.contribute.title,
      },
      paragraph: {
        text: t.contribute.paragraph,
      },
      action: '/api/table/contributors',
      method: 'POST',
      inputs: [
        {
          name: 'name',
          label: t.contribute.inputName,
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          label: t.contribute.inputEmail,
          type: 'email',
          required: true,
        },
        {
          name: 'why',
          label: t.contribute.inputWhy,
          type: 'textarea',
          required: true,
        },
        {
          name: 'how',
          label: t.contribute.inputHow,
          type: 'textarea',
          required: true,
        },
        {
          name: 'what',
          label: t.contribute.inputWhat,
          type: 'textarea',
          required: true,
        },
        {
          name: 'skills',
          label: t.contribute.inputSkills,
          type: 'textarea',
          required: true,
        },
      ],
      buttons: [
        {
          label: t.contribute.button,
          type: 'submit',
        },
      ],
      successMessage: t.contribute.successMessage,
    },
    footer(t),
  ],
})
