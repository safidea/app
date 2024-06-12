import type { Page } from '@safidea_/engine/page'
import { header } from '../components/header'
import type { Translation } from '../../translations'
import { footer } from '../components/footer'

export const engine = (t: Translation): Page => ({
  name: 'engine',
  path: t.path + '/engine',
  head: {
    title: 'Engine',
  },
  body: [
    header(t),
    {
      component: 'Hero',
      title: {
        text: t.engine.heroTitle,
      },
      paragraph: {
        text: t.engine.heroParagraph,
      },
      buttons: [
        {
          label: t.engine.heroButtonLabel,
          href: t.engine.heroButtonHref,
        },
      ],
    },
    {
      component: 'Features',
      title: {
        text: t.engine.featuresTitle,
      },
      paragraph: {
        text: t.engine.featuresParagraph,
      },
      features: t.engine.features.map((f) => ({
        title: {
          text: f.title,
        },
        paragraph: {
          text: f.paragraph,
        },
        icon: {
          type: 'Gift',
        },
      })),
    },
    {
      component: 'Features',
      title: {
        text: t.engine.technologiesTitle,
      },
      paragraph: {
        text: t.engine.technologiesParagraph,
      },
      features: t.engine.technologies.map((t) => ({
        title: {
          text: t.title,
        },
        paragraph: {
          text: t.paragraph,
        },
        icon: {
          type: 'Gift',
        },
      })),
    },
    footer(t),
  ],
})
