import type { Page } from '@safidea_/engine/page'
import { footer } from './components/footer'
import { header } from './components/header'
import type { Translation } from '../translations'

export const contribute = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/contribute',
  head: {
    title: 'Safidea',
    metas: [
      {
        name: 'description',
        content: 'Safidea',
      },
    ],
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
        },
        {
          name: 'email',
          label: t.contribute.inputEmail,
          type: 'email',
        },
        {
          name: 'why',
          label: t.contribute.inputWhy,
          type: 'textarea',
        },
        {
          name: 'how',
          label: t.contribute.inputHow,
          type: 'textarea',
        },
        {
          name: 'what',
          label: t.contribute.inputWhat,
          type: 'textarea',
        },
        {
          name: 'skills',
          label: t.contribute.inputSkills,
          type: 'textarea',
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
