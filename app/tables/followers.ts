import type { Table } from '@safidea_/engine/table'

export const followers: Table = {
  name: 'followers',
  fields: [
    {
      name: 'email',
      type: 'Email',
    },
  ],
}
