import type { Component } from '@safidea_/engine/page'
import type { Translation } from '../../translations'

export const footer = (t: Translation): Component => ({
  component: 'Footer',
  title: {
    text: 'Safidea',
  },
  paragraph: {
    text: t.footer.paragraph,
  },
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
    {
      label: t.footer.whySafidea,
      href: t.path + '/why',
    },
    {
      label: t.footer.followTheAdventure,
      href: t.path + '/follow',
    },
    {
      label: t.footer.contributeToTheProject,
      href: t.path + '/contribute',
    },
  ],
  copyright: '© 2024 Safidea',
})
