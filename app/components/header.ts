import type { Component } from '@safidea_/engine/page'

export const header: Component = {
  component: 'Header',
  title: {
    text: 'Safidea',
  },
  links: [
    {
      label: 'Produits & Services',
      href: '/#products-services',
    },
    {
      label: 'Organisation',
      href: '/#organisation',
    },
  ],
  buttons: [
    {
      label: 'Nous rejoindre',
      href: '/nous-rejoindre',
    },
  ],
}
