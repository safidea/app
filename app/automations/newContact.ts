import type { Automation } from '@safidea_/engine/automation'

export const newContact: Automation = {
  name: 'newContact',
  trigger: {
    event: 'RecordCreated',
    table: 'contacts',
  },
  actions: [
    {
      name: 'send-alert-email',
      action: 'SendEmail',
      from: '$MAILER_FROM',
      to: '$MAILER_TO',
      subject: '{{trigger.email}}: {{trigger.subject}}',
      text: '{{trigger.message}}',
      html: '{{trigger.message}}',
    },
  ],
}
