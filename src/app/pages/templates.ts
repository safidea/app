import type { Page } from '@safidea_/engine'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'
import { head } from './components/head'

export const templates = (t: Translation): Page => ({
  name: 'templates',
  path: t.path + '/templates',
  head: {
    title: t.templates.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.templates.pageDescription,
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
            text: t.templates.heroTitle,
          },
          paragraph: {
            text: t.templates.heroParagraph,
          },
          buttons: [
            {
              label: t.templates.heroButtonLabel,
              href: 'https://github.com/safidea/templates',
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'Features',
          className: 'my-16',
          title: {
            text: t.templates.featuresTitle,
          },
          paragraph: {
            text: t.templates.featuresParagraph,
          },
          features: [
            {
              title: {
                text: t.templates.features[0].title,
              },
              paragraph: {
                text: t.templates.features[0].paragraph,
              },
              icon: {
                name: 'Gift',
              },
            },
            {
              title: {
                text: t.templates.features[0].title,
              },
              paragraph: {
                text: t.templates.features[0].paragraph,
              },
              icon: {
                name: 'Gift',
              },
            },
            {
              title: {
                text: t.templates.features[0].title,
              },
              paragraph: {
                text: t.templates.features[0].paragraph,
              },
              icon: {
                name: 'Gift',
              },
            },
          ],
        },
        {
          component: 'CTA',
          className: 'my-16',
          title: {
            text: t.templates.ctaTitle,
          },
          paragraph: {
            text: t.templates.ctaParagraph,
          },
          buttons: [
            {
              label: t.templates.ctaButtonLabel,
              href: t.path + '/requests',
              variant: 'secondary',
            },
          ],
        },
      ],
    },
    footer(t),
  ],
})
