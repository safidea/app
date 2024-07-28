import type { Table } from '@safidea_/engine/'

export const items: Table = {
  name: 'items',
  fields: [
    {
      name: 'activity',
      field: 'LongText',
    },
    {
      name: 'quantity',
      field: 'Number',
    },
    {
      name: 'unity',
      field: 'SingleLineText',
    },
    {
      name: 'unit_price',
      field: 'Number',
    },
    {
      name: 'vat',
      field: 'Number',
    },
    {
      name: 'total_vat',
      field: 'Number',
    },
    {
      name: 'total_et',
      field: 'Number',
    },
    {
      name: 'total_ati',
      field: 'Number',
    },
  ],
}
