import type { Page } from '@safidea_/engine/page'
import { footer } from './components/footer'
import { header } from './components/header'
import type { Translation } from '../translations'

export const follow = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/follow',
  head: {
    title: t.follow.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.follow.pageDescription,
      },
    ],
  },
  body: [
    header(t),
    {
      component: 'Form',
      title: {
        text: t.follow.title,
      },
      paragraph: {
        text: t.follow.paragraph,
      },
      action: '/api/table/followers',
      method: 'POST',
      inputs: [
        {
          name: 'email',
          label: t.follow.email,
          placeholder: t.follow.emailPlaceholder,
          type: 'email',
        },
      ],
      buttons: [
        {
          label: t.follow.buttonLabel,
          type: 'submit',
        },
      ],
      successMessage: t.follow.successMessage,
    },
    {
      component: 'Container',
      id: 'members',
      width: 'lg',
      children: [
        {
          component: 'Image',
          src: '/profile.jpg',
          alt: 'Thomas JEANNEAU',
          rounded: 'xl',
          align: 'center',
        },
        {
          component: 'Title',
          text: 'Thomas JEANNEAU',
          size: 'xs',
          align: 'center',
        },
        {
          component: 'Paragraph',
          text: t.follow.founderTitle,
          align: 'center',
        },
        {
          component: 'Paragraph',
          text: '"' + t.follow.founderDescription + '"',
          align: 'center',
          size: 'lg',
        },
      ],
    },
    footer(t),
  ],
})
