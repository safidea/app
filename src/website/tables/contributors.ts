import type { Table } from '@safidea_/engine'

export const contributors: Table = {
  name: 'contributors',
  fields: [
    {
      name: 'name',
      field: 'SingleLineText',
    },
    {
      name: 'email',
      field: 'Email',
    },
    {
      name: 'why',
      field: 'LongText',
    },
    {
      name: 'how',
      field: 'LongText',
    },
    {
      name: 'what',
      field: 'LongText',
    },
    {
      name: 'skills',
      field: 'LongText',
    },
  ],
}
