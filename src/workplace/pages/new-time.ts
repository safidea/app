import type { Page } from '@safidea_/engine'
import { sidebar } from './shared/sidebar'

export const newTime: Page = {
  name: 'new-time',
  path: '/workplace/times/new',
  body: [
    sidebar([
      {
        component: 'Form',
        action: '/api/table/times',
        method: 'POST',
        title: {
          text: 'Nouveau temps passé',
        },
        inputs: [
          {
            name: 'customer',
            label: 'Client',
            type: 'text',
            required: true,
          },
          {
            name: 'project',
            label: 'Projet',
            type: 'text',
            required: true,
          },
          {
            name: 'hours',
            label: 'Heures',
            type: 'number',
            required: true,
          },
          {
            name: 'minutes',
            label: 'Minutes',
            type: 'number',
            required: true,
          },
          {
            name: 'content',
            label: 'Contenu',
            type: 'textarea',
            required: true,
          },
          {
            name: 'date',
            label: 'Date',
            type: 'date',
            required: true,
          },
        ],
        buttons: [
          {
            type: 'submit',
            label: 'Créer',
            variant: 'secondary',
          },
        ],
        successMessage: 'Le temps passé a bien été enregistré.',
      },
    ]),
  ],
}
