import type { Page } from '@safidea_/engine'
import { header } from './shared/header'
import type { Translation } from '../translations'
import { footer } from './shared/footer'
import { head } from './shared/head'

export const requests = (t: Translation): Page => ({
  name: 'requests',
  path: t.path + '/requests',
  head: {
    title: t.requests.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.requests.pageDescription,
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
            text: t.requests.heroTitle,
          },
          paragraph: {
            text: t.requests.heroParagraph,
          },
          buttons: [
            {
              label: t.requests.heroButtonLabel,
              href: 'https://requests.safidea.com' + t.path,
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'Logos',
          title: {
            text: t.requests.customersTitle,
          },
          className: 'my-16',
          images: [
            {
              alt: 'Agorastore',
              src: '/customers/agorastore.jpeg',
            },
            {
              alt: 'Capital PV',
              src: '/customers/capital-pv.png',
            },
            {
              alt: 'Codesign-it',
              src: '/customers/codesign-it.png',
            },
            {
              alt: "D'un seul geste",
              src: '/customers/dun-seul-geste.png',
            },
            {
              alt: "L'intendance",
              src: '/customers/lintendance.png',
            },
          ],
        },
        {
          component: 'Features',
          className: 'my-16',
          title: {
            text: t.requests.featuresTitle,
          },
          paragraph: {
            text: t.requests.featuresParagraph,
          },
          features: [
            {
              title: {
                text: t.requests.features[0].title,
              },
              paragraph: {
                text: t.requests.features[0].paragraph,
              },
              icon: {
                name: 'ComputerDesktop',
              },
            },
            {
              title: {
                text: t.requests.features[1].title,
              },
              paragraph: {
                text: t.requests.features[1].paragraph,
              },
              icon: {
                name: 'DevicePhoneMobile',
              },
            },
            {
              title: {
                text: t.requests.features[2].title,
              },
              paragraph: {
                text: t.requests.features[2].paragraph,
              },
              icon: {
                name: 'CommandLine',
              },
            },
            {
              title: {
                text: t.requests.features[3].title,
              },
              paragraph: {
                text: t.requests.features[3].paragraph,
              },
              icon: {
                name: 'MagnifyingGlass',
              },
            },
            {
              title: {
                text: t.requests.features[4].title,
              },
              paragraph: {
                text: t.requests.features[4].paragraph,
              },
              icon: {
                name: 'AcademicCap',
              },
            },
            {
              title: {
                text: t.requests.features[5].title,
              },
              paragraph: {
                text: t.requests.features[5].paragraph,
              },
              icon: {
                name: 'ChatBubbleBottomCenterText',
              },
            },
          ],
        },
        {
          component: 'CTA',
          className: 'my-16',
          title: {
            text: t.requests.ctaTitle,
          },
          paragraph: {
            text: t.requests.ctaParagraph,
          },
          buttons: [
            {
              label: t.requests.ctaButtonLabel,
              href: 'https://requests.safidea.com',
              variant: 'secondary',
            },
          ],
        },
      ],
    },
    footer(t),
  ],
})
