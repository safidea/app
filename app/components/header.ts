import type { Component } from '@safidea_/engine/page'
import { links } from './links'

export const header: Component = {
  component: 'Header',
  title: {
    text: 'Safidea',
  },
  links,
  buttons: [
    {
      label: 'Nous rejoindre',
      href: '/nous-rejoindre',
    },
  ],
}
