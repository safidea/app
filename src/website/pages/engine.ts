import type { Page } from '@safidea_/engine'
import { header } from './shared/header'
import type { Translation } from '../translations'
import { footer } from './shared/footer'
import { head } from './shared/head'

export const engine = (t: Translation): Page => ({
  name: 'engine',
  path: t.path + '/engine',
  head: {
    title: t.engine.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.engine.pageDescription,
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
            text: t.engine.heroTitle,
          },
          paragraph: {
            text: t.engine.heroParagraph,
          },
          buttons: [
            {
              label: t.engine.heroGithubButtonLabel,
              href: 'https://github.com/safidea/engine',
              variant: 'secondary',
            },
            {
              label: t.engine.heroDocButtonLabel,
              href: 'https://json-schema.app/view/%23?url=https%3A%2F%2Fsafidea.com%2Fschemas%2Fapp.schema.json',
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'Features',
          className: 'my-16',
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
              name: 'Gift',
            },
          })),
        },
        {
          component: 'Features',
          className: 'my-16',
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
              name: 'Gift',
            },
          })),
        },
        {
          component: 'CTA',
          className: 'my-16',
          title: {
            text: t.engine.docTitle,
          },
          paragraph: {
            text: t.engine.docParagraph,
          },
          buttons: [
            {
              label: t.engine.docButtonLabel,
              href: 'https://json-schema.app/view/%23?url=https%3A%2F%2Fsafidea.com%2Fschemas%2Fapp.schema.json',
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'CTA',
          className: 'my-16',
          title: {
            text: t.engine.templatesTitle,
          },
          paragraph: {
            text: t.engine.templatesParagraph,
          },
          buttons: [
            {
              label: t.engine.templatesButtonLabel,
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
