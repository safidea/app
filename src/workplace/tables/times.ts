import type { Table } from '@safidea_/engine/'

export const times: Table = {
  name: 'times',
  fields: [
    {
      name: 'customer',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'project',
      field: 'SingleLineText',
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
