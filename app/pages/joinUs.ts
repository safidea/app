import type { Page } from '@safidea_/engine/page'
import { header } from '../components/header'
import { footer } from '../components/footer'

export const joinUs: Page = {
  name: 'join-us',
  path: '/nous-rejoindre',
  head: {
    title: 'Safidea - Nous rejoindre',
    metas: [
      {
        name: 'description',
        content: 'Safidea - Nous rejoindre',
      },
    ],
  },
  body: [
    header,
    {
      component: 'Form',
      title: {
        text: 'Nous rejoindre',
      },
      paragraph: {
        text: 'Envoyez-nous votre message.',
      },
      action:
        'https://hooks.airtable.com/workflows/v1/genericWebhook/appvfoFbHQxqYe621/wflEnWJ8P2EGrG4IU/wtrk3YVUvb1nB4yZu',
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
