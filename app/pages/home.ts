import type { Page } from '@safidea_/engine/page'
import { footer } from '../components/footer'
import { header } from '../components/header'

export const home: Page = {
  name: 'home',
  path: '/',
  head: {
    title: 'Safidea',
    metas: [
      {
        name: 'description',
        content: 'Safidea',
      },
    ],
  },
  body: [
    header,
    {
      component: 'Hero',
      title: {
        text: 'Agence logiciel sur-mesure dédiée à votre souveraineté numérique',
      },
      paragraph: {
        text: "Nous vous accompagnons dans la conception, le développement et la maintenance du système d'information de votre organisation grâce à notre technologie et nos experts.",
      },
      buttons: [
        {
          label: 'Travailler avec nous',
          href: '/travailler-avec-nous',
        },
      ],
    },
    {
      component: 'Features',
      title: {
        text: 'Produits & services',
      },
      paragraph: {
        text: 'Nous proposons des produits et services pour construire votre système dinformation sur-mesure et souverain.',
      },
      features: [
        {
          title: {
            text: 'Engine',
          },
          paragraph: {
            text: "Notre moteur de génération d'applications web à partir d'une configuration",
          },
          icon: {
            type: 'ComputerDesktop',
          },
        },
        {
          title: {
            text: 'Request',
          },
          paragraph: {
            text: 'Notre plateforme de gestion de demandes techniques sur du conseil, de la formation et du développement',
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
        text: 'Vous avez un besoin logiciel spécifique ?',
      },
      paragraph: {
        text: 'Contactez-nous pour en discuter',
      },
      buttons: [
        {
          label: 'Travailler avec nous',
          href: '/travailler-avec-nous',
        },
      ],
    },
    {
      component: 'Features',
      title: {
        text: 'Organisation',
      },
      paragraph: {
        text: 'Nous sommes une entreprise auto-gérée.',
      },
      features: [
        {
          title: {
            text: 'Liberté salariale',
          },
          paragraph: {
            text: 'Chaque membre fixe son propre salaire, qui doit être validé par les autres membres.',
          },
          icon: {
            type: 'ComputerDesktop',
          },
        },
        {
          title: {
            text: 'Liberté de construire',
          },
          paragraph: {
            text: 'Chaque membre peut proposer des projets et les réaliser avec le soutien des autres membres.',
          },
          icon: {
            type: 'ChatBubbleBottomCenterText',
          },
        },
        {
          title: {
            text: 'Pas de bureau',
          },
          paragraph: {
            text: "Nous travaillons à distance, chacun depuis l'endroit de son choix.",
          },
          icon: {
            type: 'ChatBubbleBottomCenterText',
          },
        },
        {
          title: {
            text: "Pas d'horaire",
          },
          paragraph: {
            text: 'Nous travaillons quand nous le souhaitons, tant que nous respectons nos engagements.',
          },
          icon: {
            type: 'ChatBubbleBottomCenterText',
          },
        },
        {
          title: {
            text: 'Pas de hiérarchie',
          },
          paragraph: {
            text: 'Nous prenons les décisions ensemble, en utilisant la méthode du consentement.',
          },
          icon: {
            type: 'ChatBubbleBottomCenterText',
          },
        },
        {
          title: {
            text: 'Pas de manager',
          },
          paragraph: {
            text: 'Nous nous auto-organisons pour réaliser nos projets, chacun est responsable de ses engagements.',
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
        text: 'Vous souhaiteriez rejoindre notre organisation ?',
      },
      paragraph: {
        text: 'Contactez-nous pour en discuter',
      },
      buttons: [
        {
          label: 'Nous rejoindre',
          href: '/nous-rejoindre',
        },
      ],
    },
    footer,
  ],
}
