import type { Test } from '@safidea_/engine'

export const homeTests: Test[] = [
  {
    name: 'should display Safidea',
    when: [
      {
        event: 'Open',
        url: '/',
      },
    ],
    then: [
      {
        expect: 'Text',
        text: 'Safidea',
      },
    ],
  },
]
