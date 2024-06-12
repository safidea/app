import type { Page } from '@safidea_/engine/page'
import { footer } from './components/footer'
import { header } from './components/header'
import type { Translation } from '../translations'

export const why = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/why',
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
    header(t),
    {
      component: 'Hero',
      title: {
        text: 'Régie logiciel sur-mesure dédiée à votre souveraineté numérique',
      },
      paragraph: {
        text: 'Nous vous accompagnons dans la conception, le développement et la maintenance de vos logiciels métiers grâce à notre expertise.',
      },
      buttons: [
        {
          label: 'Nous contacter',
          href: '/#contact',
        },
      ],
    },
    {
      component: 'Container',
      id: 'mission',
      width: 'lg',
      children: [
        {
          component: 'Title',
          text: 'Notre mission',
        },
        {
          component: 'Paragraph',
          text: "Nous apportons le pouvoir, l'autonomie et la souveraineté technologique la plus élevée à ses clients à travers une organisation humaine centrée sur le bien-être de ses membres et de la planète.",
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
      width: 'lg',
      children: [
        {
          component: 'Title',
          text: 'Notre culture',
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
      component: 'Container',
      id: 'members',
      children: [
        {
          component: 'Title',
          text: 'Membres',
          align: 'center',
          size: 'xl',
        },
      ],
    },
    {
      component: 'Container',
      id: 'members',
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
          text: 'Responsable Développement',
          align: 'center',
        },
        {
          component: 'Paragraph',
          text: '"J’ai décidé de créer Safidea car je suis profondément persuadé que la technologie est sous-exploitée, mal utilisée, mal perçue, gangrénée par des dynamiques capitalistes, et qu’elle pourrait régler beaucoup plus de problèmes qu’en créer. J’ai également le sentiment que, dans un monde du travail où nous passons une bonne partie de notre vie et où la notion d’humain est abstraite, voire totalement absente, prendre soin des autres n’est pas un luxe qu’on peut se permettre, mais une nécessité."',
          align: 'center',
          size: 'lg',
        },
      ],
    },
    footer(t),
  ],
})
