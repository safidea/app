import type { Automation } from '@safidea_/engine'

const js = String.raw

export const buildInvoicePdfOnUpsert: Automation = {
  name: 'buildInvoicePDF',
  trigger: {
    trigger: 'ApiCalled',
    path: 'create-invoices-from-times',
    output: {
      invoices: {
        type: 'array',
        value: '{{ buildData.invoices }}',
      },
    },
  },
  actions: [
    {
      name: 'buildData',
      action: 'RunJavascriptCode',
      code: js`
        const times = await table('times').list()
        const customersIds = times.map(t => t.customer).filter((value, index, self) => self.indexOf(value) === index)
        const customers = await table('customers').list([{ field: 'id', operator: 'isAnyOf', value: customersIds }])
        const projectsIds = times.map(t => t.project).filter((value, index, self) => self.indexOf(value) === index)
        const projects = await table('projects').list([{ field: 'id', operator: 'isAnyOf', value: projectsIds }])

        const items = []
        const invoices = []

        for (const time of times) {
          const customer = customers.find(c => c.id === time.customer)
          const project = projects.find(p => p.id === time.project)
          const index = items.findIndex(i => i.project === project.id)
          if (index > -1) {
            const quantity = (Number(time.hours) * 60 + Number(time.minutes)) / 60
            items[index].quantity += quantity
          } else {
            items.push({
              project: project.id,
              quantity: (Number(time.hours) * 60 + Number(time.minutes)) / 60,
              unit_price: 200,
              unity: "Heure",
              vat: 20.0,
              activity: "Low Code CTO - Conseil, développement et formation",
            })
          }
        }

        for (let i = 0; i < items.length; i++) {
          const { project, ...itemToCreate } = items[i]
          const item = await table('items').insert(itemToCreate)
          const customer = customers.find(c => c.id === projects.find(p => p.id === project).customer).id
          const date = new Date();
          const due_date = new Date();
          due_date.setMonth(due_date.getMonth() + 1);
          const invoice = await table('invoices').insert({
            customer,
            number: String(2000 + i),
            date: date.toISOString(),
            due_date: due_date.toISOString(),
            items: [item.id],
          })

          invoices.push(invoice)
        }

        return { invoices }
      `,
    },
  ],
}
