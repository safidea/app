import type { Table } from '@safidea_/engine/table'

export const contributors: Table = {
  name: 'contributors',
  fields: [
    {
      name: 'name',
      type: 'SingleLineText',
    },
    {
      name: 'email',
      type: 'Email',
    },
    {
      name: 'why',
      type: 'LongText',
    },
    {
      name: 'how',
      type: 'LongText',
    },
    {
      name: 'what',
      type: 'LongText',
    },
    {
      name: 'skills',
      type: 'LongText',
    },
  ],
}
