import type { Automation } from '@safidea_/engine/automation'

export const newContributor: Automation = {
  name: 'newContributor',
  trigger: {
    event: 'RecordCreated',
    table: 'contributors',
  },
  actions: [
    {
      name: 'send-alert-email',
      action: 'SendEmail',
      from: '$MAILER_FROM',
      to: '$MAILER_TO',
      subject: 'Demande de contribution de {{trigger.name}}',
      text: 'Email : {{trigger.message}}\n\nPourquoi : {{trigger.why}}\n\nComment : {{trigger.how}}\n\nQuoi : {{trigger.what}}\n\nCompétences : {{trigger.skills}}',
      html: 'Email : {{trigger.message}}\n\nPourquoi : {{trigger.why}}\n\nComment : {{trigger.how}}\n\nQuoi : {{trigger.what}}\n\nCompétences : {{trigger.skills}}',
    },
  ],
}
