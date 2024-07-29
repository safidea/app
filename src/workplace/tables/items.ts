import type { Table } from '@safidea_/engine/'

export const items: Table = {
  name: 'items',
  fields: [
    {
      name: 'activity',
      field: 'LongText',
      required: true,
    },
    {
      name: 'quantity',
      field: 'Number',
      required: true,
    },
    {
      name: 'unity',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'unit_price',
      field: 'Number',
      required: true,
    },
    {
      name: 'vat',
      field: 'Number',
      required: true,
    },
    {
      name: 'total_vat',
      field: 'Formula',
      formula: 'quantity * unit_price * vat / 100',
      output: {
        field: 'Number',
      },
    },
    {
      name: 'total_et',
      field: 'Formula',
      formula: 'quantity * unit_price',
      output: {
        field: 'Number',
      },
    },
    {
      name: 'total_ati',
      field: 'Formula',
      formula: 'total_et + total_vat',
      output: {
        field: 'Number',
      },
    },
  ],
}
