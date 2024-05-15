import type { Config as Page } from '@safidea_/engine/page'

export const home: Page = {
  name: 'home',
  path: '/',
  head: {
    title: 'Request',
    metas: [
      {
        name: 'description',
        content: 'Request',
      },
    ],
  },
  body: [
    {
      component: 'Header',
      title: {
        text: 'Request',
      },
      links: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Get Started',
          href: '/get-started',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
      buttons: [
        {
          label: 'Login',
          href: '/login',
        },
      ],
    },
    {
      component: 'Hero',
      title: {
        text: 'Your tech team on demand 🚀',
      },
      paragraph: {
        text: 'Tech subscriptions for everyone. Pause or cancel anytime.',
      },
      buttons: [
        {
          label: 'Get Started',
          href: '/get-started',
        },
      ],
    },
    {
      component: 'Logos',
      title: {
        text: 'Our clients',
      },
      images: [
        {
          alt: 'Agorastore',
          src: '/logos/agorastore.jpeg',
        },
        {
          alt: 'Capital PV',
          src: '/logos/capital-pv.png',
        },
        {
          alt: 'Codesign-it',
          src: '/logos/codesign-it.png',
        },
        {
          alt: 'dun-seul-geste',
          src: '/logos/dun-seul-geste.png',
        },
        {
          alt: "L'intendance",
          src: '/logos/lintendance.png',
        },
      ],
    },
    {
      component: 'Features',
      title: {
        text: 'Our features',
      },
      paragraph: {
        text: 'We provide a full stack of services to help you build your information system.',
      },
      features: [
        {
          title: {
            text: 'Web development',
          },
          paragraph: {
            text: 'We build web applications using the latest technologies.',
          },
          icon: {
            type: 'ComputerDesktop',
          },
        },
        {
          title: {
            text: 'Mobile development',
          },
          paragraph: {
            text: 'We build mobile applications using the latest technologies.',
          },
          icon: {
            type: 'DevicePhoneMobile',
          },
        },
        {
          title: {
            text: 'DevOps',
          },
          paragraph: {
            text: 'We build and maintain your infrastructure using the latest technologies.',
          },
          icon: {
            type: 'CommandLine',
          },
        },
        {
          title: {
            text: 'Consulting',
          },
          paragraph: {
            text: 'We help you build your information system.',
          },
          icon: {
            type: 'MagnifyingGlass',
          },
        },
        {
          title: {
            text: 'Training',
          },
          paragraph: {
            text: 'We train your team to the latest technologies.',
          },
          icon: {
            type: 'AcademicCap',
          },
        },
        {
          title: {
            text: 'Support',
          },
          paragraph: {
            text: 'We provide support for your information system.',
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
        text: 'Get Started',
      },
      paragraph: {
        text: 'Get started with Request',
      },
      buttons: [
        {
          label: 'Get Started',
          href: '/get-started',
        },
      ],
    },
    {
      component: 'Footer',
      title: {
        text: 'Request',
      },
      paragraph: {
        text: 'Request is a tech company based in Paris, France.',
      },
      links: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Get Started',
          href: '/get-started',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
      copyright: '© 2021 Request',
    },
  ],
}
