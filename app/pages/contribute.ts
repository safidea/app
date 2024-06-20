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
          placeholder: t.contribute.inputNamePlaceholder,
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          label: t.contribute.inputEmail,
          placeholder: t.contribute.inputEmailPlaceholder,
          type: 'email',
          required: true,
        },
        {
          name: 'why',
          label: t.contribute.inputWhy,
          placeholder: t.contribute.inputWhyPlaceholder,
          type: 'textarea',
          required: true,
        },
        {
          name: 'how',
          label: t.contribute.inputHow,
          placeholder: t.contribute.inputHowPlaceholder,
          type: 'textarea',
          required: true,
        },
        {
          name: 'what',
          label: t.contribute.inputWhat,
          placeholder: t.contribute.inputWhatPlaceholder,
          type: 'textarea',
          required: true,
        },
        {
          name: 'skills',
          label: t.contribute.inputSkills,
          placeholder: t.contribute.inputSkillsPlaceholder,
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
