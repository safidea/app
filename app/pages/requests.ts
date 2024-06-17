import type { Page } from '@safidea_/engine/page'
import { header } from './components/header'
import type { Translation } from '../translations'
import { footer } from './components/footer'

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
  },
  body: [
    header(t),
    {
      component: 'Hero',
      title: {
        text: t.requests.heroTitle,
      },
      paragraph: {
        text: t.requests.heroParagraph,
      },
      buttons: [
        {
          label: t.requests.heroButtonLabel,
          href: 'https://requests.safidea.com',
        },
      ],
    },
    {
      component: 'Logos',
      title: {
        text: t.requests.customersTitle,
      },
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
            type: 'ComputerDesktop',
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
            type: 'DevicePhoneMobile',
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
            type: 'CommandLine',
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
            type: 'MagnifyingGlass',
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
            type: 'AcademicCap',
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
            type: 'ChatBubbleBottomCenterText',
          },
        },
      ],
    },
    {
      component: 'CTA',
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
        },
      ],
    },
    footer(t),
  ],
})
