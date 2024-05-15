import type { Component } from '@safidea_/engine/page'

export const footer: Component = {
  component: 'Footer',
  title: {
    text: 'Safidea',
  },
  paragraph: {
    text: 'Safidea est une agence logiciel sur-mesure dédiée à votre souveraineté numérique.',
  },
  links: [
    {
      label: 'Produits & Services',
      href: '#products-services',
    },
    {
      label: 'Organisation',
      href: '#organisation',
    },
  ],
  copyright: '© 2024 Safidea',
}
