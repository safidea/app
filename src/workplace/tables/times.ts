import type { Table } from '@safidea_/engine/'

export const times: Table = {
  name: 'times',
  fields: [
    {
      name: 'customer',
      field: 'SingleLinkedRecord',
      table: 'customers',
      required: true,
    },
    {
      name: 'project',
      field: 'SingleLinkedRecord',
      table: 'projects',
      required: true,
    },
    {
      name: 'hours',
      field: 'SingleSelect',
      options: ['0', '1', '2', '3', '4'],
      required: true,
    },
    {
      name: 'minutes',
      field: 'SingleSelect',
      options: ['0', '15', '30', '45'],
      required: true,
    },
    {
      name: 'cost',
      field: 'Formula',
      formula: '(CAST(hours AS INTEGER) * 60 + CAST(minutes AS INTEGER)) / 60 * 200',
      output: {
        field: 'Number',
      },
    },
    {
      name: 'content',
      field: 'LongText',
      required: true,
    },
    {
      name: 'date',
      field: 'DateTime',
      required: true,
    },
  ],
}
