import type { Table } from '@safidea_/engine/'

export const invoices: Table = {
  name: 'invoices',
  fields: [
    {
      name: 'customer_name',
      field: 'SingleLineText',
    },
    {
      name: 'customer_address_street',
      field: 'SingleLineText',
    },
    {
      name: 'customer_address_postal_code',
      field: 'SingleLineText',
    },
    {
      name: 'customer_address_country',
      field: 'SingleLineText',
    },
    {
      name: 'number',
      field: 'SingleLineText',
    },
    {
      name: 'date',
      field: 'DateTime',
    },
    {
      name: 'total_et',
      field: 'Number',
    },
    {
      name: 'total_vat',
      field: 'Number',
    },
    {
      name: 'total_ati',
      field: 'Number',
    },
  ],
}
