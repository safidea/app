import type { Table } from '@safidea_/engine'

export const customers: Table = {
  name: 'customers',
  fields: [
    {
      name: 'name',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'address_street',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'address_postal_code',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'address_city',
      field: 'SingleLineText',
      required: true,
    },
    {
      name: 'address_country',
      field: 'SingleLineText',
      required: true,
    },
  ],
}
