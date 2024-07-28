import type { Component } from '@safidea_/engine'

export const sidebar = (children: Component[]): Component => ({
  component: 'Sidebar',
  title: {
    text: 'Safidea',
  },
  links: [
    {
      label: 'Nouveau temps passé',
      href: '/workplace/times/new',
      prefixIcon: {
        name: 'Clock',
      },
    },
    {
      label: 'Temps passés',
      href: '/workplace/times',
      prefixIcon: {
        name: 'ListBullet',
      },
    },
    {
      label: 'Factures',
      href: '/workplace/invoices',
      prefixIcon: {
        name: 'DocumentText',
      },
    },
  ],
  children,
})
