import type { Component, Page } from '@safidea_/engine/page'
import { footer } from './components/footer'
import { header } from './components/header'
import type { Translation } from '../translations'

export const home = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/',
  head: {
    title: t.home.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.home.pageDescription,
      },
    ],
  },
  body: [
    header(t),
    {
      component: 'Hero',
      title: {
        text: t.home.heroTitle,
      },
      paragraph: {
        text: t.home.heroParagraph,
      },
      buttons: [
        {
          label: t.home.heroCustomerButtonLabel,
          href: t.path + '/requests',
        },
        {
          label: t.home.heroContributorButtonLabel,
          href: t.path + '/contribute',
          variant: 'secondary',
        },
      ],
    },
    {
      component: 'CTA',
      title: {
        text: t.home.requestsTitle,
      },
      paragraph: {
        text: t.home.requestsParagraph,
      },
      buttons: [
        {
          label: t.home.requestsButtonLabel,
          href: t.path + '/requests',
        },
      ],
    },
    {
      component: 'CTA',
      title: {
        text: t.home.engineTitle,
      },
      paragraph: {
        text: t.home.engineParagraph,
      },
      buttons: [
        {
          label: t.home.engineButtonLabel,
          href: t.path + '/engine',
        },
      ],
    },
    {
      component: 'CTA',
      title: {
        text: t.home.templatesTitle,
      },
      paragraph: {
        text: t.home.templatesParagraph,
      },
      buttons: [
        {
          label: t.home.templatesButtonLabel,
          href: t.path + '/templates',
        },
      ],
    },
    footer(t),
  ],
})
