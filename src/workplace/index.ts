import type { App } from '@safidea_/engine'
import { newTime } from './pages/new-time'
import { times as timesTable } from './tables/times'
import { times as timesPage } from './pages/times'
import { invoices as invoicesPage } from './pages/invoices'
import { invoices as invoicesTable } from './tables/invoices'
import { items as itemsTable } from './tables/items'

export const config: App = {
  name: 'Safidea Workplace',
  pages: [newTime, timesPage, invoicesPage],
  tables: [timesTable, invoicesTable, itemsTable],
}
