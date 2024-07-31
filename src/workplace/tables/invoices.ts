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
      name: 'due_date',
      field: 'DateTime',
    },
    {
      name: 'items',
      field: 'MultipleLinkedRecord',
      table: 'items',
    },
    {
      name: 'total_et',
      field: 'Rollup',
      multipleLinkedRecord: 'items',
      linkedRecordField: 'total_et',
      formula: 'SUM(values)',
      output: {
        field: 'Number',
      },
    },
    {
      name: 'total_vat',
      field: 'Rollup',
      multipleLinkedRecord: 'items',
      linkedRecordField: 'total_vat',
      formula: 'SUM(values)',
      output: {
        field: 'Number',
      },
    },
    {
      name: 'total_ati',
      field: 'Rollup',
      multipleLinkedRecord: 'items',
      linkedRecordField: 'total_ati',
      formula: 'SUM(values)',
      output: {
        field: 'Number',
      },
    },
  ],
}
