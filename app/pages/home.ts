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
        text: "Nous vous accompagnons dans la conception, le développement et la maintenance du système d'information de votre organisation grâce à notre expertise.",
      },
      buttons: [
        {
          label: 'Travailler avec nous',
          href: '/travailler-avec-nous',
        },
      ],
    },
    {
      component: 'Container',
      id: 'mission',
      children: [
        {
          component: 'Title',
          text: 'Mission',
        },
        {
          component: 'Paragraph',
          text: "La mission de Safidea est d'apporter le pouvoir, l'autonomie et la souveraineté technologique la plus élevée à ses clients à travers une organisation humaine centrée sur le bien-être de ses membres et de la planète.",
          size: 'lg',
        },
        {
          component: 'Paragraph',
          text: 'Safidea promeut un contrôle complet sur le système d’informations, aussi bien dans les données manipulées pour tous les besoins opérationnels de l’organisation que dans les fonctionnalités des logiciels utilisées, permettant un usage simple, fluide et efficace.',
          size: 'lg',
        },
        {
          component: 'Paragraph',
          text: 'Cela entend également une facilité à déporter tout son système d’information et ses données d’une infrastructure server à une autre, n’ayant ainsi réelle dépendance à une organisation externe, la rendant maître de ses besoins et lui permettant de se focaliser sur l’essentiel de son existence, de son métier.',
          size: 'lg',
        },
        {
          component: 'Paragraph',
          text: "Ainsi, la technologie n’est plus un frein ni ne crée d’inertie dans la transformation des métiers et le déploiement d'offres de service ou de produit. L'expression d’un besoin métier en solution technique devient simple, le temps et l'énergie peuvent alors être focalisés sur la clarification et la précision du besoin métier.",
          size: 'lg',
        },
      ],
    },
    {
      component: 'Container',
      id: 'culture',
      children: [
        {
          component: 'Title',
          text: 'Culture',
        },
        {
          component: 'Paragraph',
          text: 'Le modèle organisationnel de Safidea est centré sur le bien-être humain via un système se voulant incorruptible tout en permettant une efficacité de fonctionnement optimale suivant les besoins.',
          size: 'lg',
        },
        {
          component: 'Paragraph',
          text: 'Afin d’assurer le bien-être des personnes y travaillant, la liberté d’action, la prise de décision éclairée et pertinente pour l’activité et l’incapacité à corrompre son fonctionnement, Safidea ne sera jamais un produit financier, et aucune personne n’y ayant travaillé ne pourra participer à la prise de décision concernant l’organisation. ',
          size: 'lg',
        },
        {
          component: 'Paragraph',
          text: 'La transparence financière sera absolue, l’argent étant considéré comme une ressource à allouer pour la bonne réalisation de nos projets, le seul objectif financier à atteindre étant l’autosuffisance. ',
          size: 'lg',
        },
      ],
    },
    {
      component: 'Features',
      id: 'products-services',
      title: {
        text: 'Produits & services',
      },
      paragraph: {
        text: "Nous proposons des produits et services pour construire votre système d'information sur-mesure et souverain.",
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
      id: 'organisation',
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
