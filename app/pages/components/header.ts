import type { Component } from '@safidea_/engine/page'
import type { Translation } from '../../translations'

export const header = (t: Translation): Component => ({
  component: 'Header',
  title: {
    text: 'Safidea',
  },
  links: [
    {
      label: 'Produits & Services',
      links: [
        {
          label: 'Engine',
          href: t.path + '/engine',
        },
        {
          label: 'Templates',
          href: t.path + '/templates',
        },
        {
          label: 'Requests',
          href: t.path + '/requests',
        },
        {
          label: 'System',
          href: t.path + '/system',
        },
      ],
    },
    {
      label: 'Pourquoi Safidea ?',
      href: t.path + '/why',
    },
    {
      label: "Suivre l'aventure",
      href: t.path + '/follow',
    },
  ],
  buttons: [
    {
      label: 'Contribuer au projet',
      href: t.path + '/contribute',
    },
  ],
})
