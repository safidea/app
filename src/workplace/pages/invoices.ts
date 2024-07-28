import type { Page } from '@safidea_/engine'
import { sidebar } from './shared/sidebar'

export const invoices: Page = {
  name: 'invoices',
  path: '/workplace/invoices',
  body: [
    sidebar([
      {
        component: 'Heading',
        title: {
          text: 'Factures',
        },
        buttons: [
          {
            label: 'Nouvau temps passé',
            href: '/workplace/invoices',
            variant: 'secondary',
          },
        ],
      },
      {
        component: 'List',
        source: '/api/table/invoices',
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
        open: '/invoices/{{ row.id }}',
      },
    ]),
  ],
}
