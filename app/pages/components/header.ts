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
          label: 'Template',
          href: t.path + '/template',
        },
        {
          label: 'Request',
          href: t.path + '/request',
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
