import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

export const templates = (t: Translation): Page => ({
  name: 'templates',
  path: t.path + '/templates',
  head: {
    title: 'Templates',
  },
  body: [
    header(t),
    {
      component: 'Hero',
      title: {
        text: t.templates.heroTitle,
      },
      paragraph: {
        text: t.templates.heroParagraph,
      },
      buttons: [
        {
          label: t.templates.heroButtonLabel,
          href: "https://github.com/safidea/templates",
        },
      ],
    },
    {
      component: 'Features',
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
            type: 'Gift',
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
            type: 'Gift',
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
            type: 'Gift',
          },
        },
      ],
    },
    {
      component: 'CTA',
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
        },
      ],
    },
    footer(t),
  ],
})
