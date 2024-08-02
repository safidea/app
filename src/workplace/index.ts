import type { App } from '@safidea_/engine'
import { newTime } from './pages/new-time'
import { times as timesTable } from './tables/times'
import { times as timesPage } from './pages/times'
import { invoices as invoicesPage } from './pages/invoices'
import { invoices as invoicesTable } from './tables/invoices'
import { items as itemsTable } from './tables/items'
import { customers as customersTable } from './tables/customers'
import { projects as projectsTable } from './tables/projects'
import { buildInvoicePdfOnUpsert } from './automations/createInvoiceFromTimes'

export const config: App = {
  name: 'Safidea Workplace',
  pages: [newTime, timesPage, invoicesPage],
  tables: [timesTable, invoicesTable, itemsTable, customersTable, projectsTable],
  automations: [buildInvoicePdfOnUpsert],
}
