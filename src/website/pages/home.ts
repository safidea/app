import type { Component, Page } from '@safidea_/engine'
import { footer } from './shared/footer'
import { header } from './shared/header'
import type { Translation } from '../translations'
import { head } from './shared/head'

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
    links: head?.links,
  },
  body: [
    header(t),
    {
      component: 'Container',
      center: true,
      className: 'max-w-5xl',
      children: [
        {
          component: 'Hero',
          className: 'my-16',
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
              variant: 'secondary',
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
          className: 'my-16',
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
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'CTA',
          className: 'my-16',
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
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'CTA',
          className: 'my-16',
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
              variant: 'secondary',
            },
          ],
        },
      ],
    },
    footer(t),
  ],
})
