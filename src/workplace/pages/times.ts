import type { Page } from '@safidea_/engine'
import { sidebar } from './shared/sidebar'

export const times: Page = {
  name: 'times',
  path: '/workplace/times',
  body: [
    sidebar([
      {
        component: 'Heading',
        title: {
          text: 'Temps passés',
        },
        buttons: [
          {
            label: 'Nouveau temps passé',
            href: '/workplace/times/new',
            variant: 'secondary',
          },
        ],
      },
      {
        component: 'List',
        source: '/api/table/times',
        columns: [
          {
            name: 'customer',
          },
          {
            name: 'project',
          },
          {
            name: 'hours',
          },
          {
            name: 'minutes',
          },
          {
            name: 'content',
          },
          {
            name: 'date',
          },
        ],
        open: '/workplace/times/{{ row.id }}',
      },
    ]),
  ],
}
