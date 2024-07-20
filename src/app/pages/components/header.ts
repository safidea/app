import type { Component } from '@safidea_/engine'
import type { Translation } from '../../translations'

export const header = (t: Translation): Component => ({
  component: 'Header',
  title: {
    text: 'Safidea',
  },
  links: [
    {
      label: t.header.productsAndServices,
      links: [
        {
          label: 'Requests',
          href: t.path + '/requests',
        },
        {
          label: 'Engine',
          href: t.path + '/engine',
        },
        {
          label: 'Templates',
          href: t.path + '/templates',
        },
      ],
    },
    {
      label: t.header.whySafidea,
      href: t.path + '/why',
    },
    {
      label: t.header.followTheAdventure,
      href: t.path + '/follow',
    },
  ],
  buttons: [
    {
      label: t.header.contributeToTheProject,
      href: t.path + '/contribute',
    },
  ],
})
