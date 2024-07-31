import type { Table } from '@safidea_/engine'

export const projects: Table = {
  name: 'projects',
  fields: [
    {
      name: 'name',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'customer',
      field: 'SingleLinkedRecord',
      table: 'customers',
      required: true,
    },
  ],
}
