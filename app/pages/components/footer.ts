import type { Component } from '@safidea_/engine/page'
import { links } from './links'

export const footer: Component = {
  component: 'Footer',
  title: {
    text: 'Safidea',
  },
  paragraph: {
    text: 'Safidea est une agence logiciel sur-mesure dédiée à votre souveraineté numérique. Ce site web a été développé avec Safidea Engine.',
  },
  links,
  copyright: '© 2024 Safidea',
}
