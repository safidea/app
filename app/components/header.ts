import type { Component } from '@safidea_/engine/page'

export const header: Component = {
  component: 'Header',
  title: {
    text: 'Safidea',
  },
  links: [
    {
      label: 'Produits',
      links: [
        {
          label: 'Engine',
          description: "Notre moteur de génération d'applications web à partir d'une configuration",
          href: 'https://engine.safidea.com/',
        },
        {
          label: 'Request',
          description:
            'Notre plateforme de gestion de demandes techniques sur du conseil, de la formation et du développement',
          href: 'https://request.safidea.com/',
        },
      ],
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
