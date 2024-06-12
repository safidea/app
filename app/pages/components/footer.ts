import type { Component } from '@safidea_/engine/page'
import type { Translation } from '../../translations'

export const footer = (t: Translation): Component => ({
  component: 'Footer',
  title: {
    text: 'Safidea',
  },
  paragraph: {
    text: 'Safidea est une agence logiciel sur-mesure dédiée à votre souveraineté numérique. Ce site web a été développé avec Safidea Engine.',
  },
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
    {
      label: 'Pourquoi Safidea ?',
      href: t.path + '/why',
    },
    {
      label: "Suivre l'aventure",
      href: t.path + '/follow',
    },
    {
      label: 'Contribuer au projet',
      href: t.path + '/contribute',
    },
  ],
  copyright: '© 2024 Safidea',
})
