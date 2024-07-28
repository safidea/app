import type { Table } from '@safidea_/engine/'

export const times: Table = {
  name: 'times',
  fields: [
    {
      name: 'customer',
      field: 'SingleLineText',
    },
    {
      name: 'project',
      field: 'SingleLineText',
    },
    {
      name: 'hours',
      field: 'Number',
    },
    {
      name: 'minutes',
      field: 'Number',
    },
    {
      name: 'content',
      field: 'LongText',
    },
    {
      name: 'date',
      field: 'DateTime',
    },
  ],
}
