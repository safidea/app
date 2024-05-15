import type { Page } from '@safidea_/engine/page'
import { header } from '../components/header'
import { footer } from '../components/footer'

export const workWithUs: Page = {
  name: 'work-with-us',
  path: '/travailler-avec-nous',
  head: {
    title: 'Safidea - Travailler avec nous',
    metas: [
      {
        name: 'description',
        content: 'Safidea - Travailler avec nous',
      },
    ],
  },
  body: [
    header,
    {
      component: 'Form',
      title: {
        text: 'Travaillez avec nous',
      },
      paragraph: {
        text: 'Dévrivez-nous votre projet.',
      },
      action:
        'https://hooks.airtable.com/workflows/v1/genericWebhook/appvfoFbHQxqYe621/wflVBk7YP78SXRKxi/wtrSTHMcvWy9B6osz',
      inputs: [
        {
          name: 'name',
          label: 'Nom',
        },
        {
          name: 'email',
          label: 'Email',
        },
        {
          name: 'message',
          label: 'Message',
        },
      ],
      buttons: [
        {
          label: 'Envoyer',
          type: 'submit',
        },
      ],
      successMessage: 'Votre message a bien été envoyé.',
    },
    footer,
  ],
}
