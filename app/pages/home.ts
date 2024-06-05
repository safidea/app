import type { Component, Page } from '@safidea_/engine/page'
import { footer } from '../components/footer'
import { header } from '../components/header'

const projects = [
  {
    title: 'Engine',
    description:
      'Engine est un package node.js open-source permettant de générer une application web à partir d’une configuration JSON. Cette technologie permet de développer des sites et applications web juste en se concentrant sur l’aspect métier, sans avoir besoin de gérer l’infrastructure technique, tout en gardant les outils collaboratifs de développement utiles tel que Git.',
    goal: 'Permettre à un développeur de générer une application web et d’en modifier le métier avec très peu de code.',
    keyResult: 'Pouvoir créer et modifier une application web en moins de 5 minutes.',
    status:
      'Une V1 permet de générer des sites web statiques et des formulaires avec une base de données et des champs textuels.',
    user: 'Si tu es un développeur Javascript, tu peux suivre le README pour installer et utiliser @safidea_/engine',
    contributor:
      'Tu es un développeur Typescript ? Rejoins les contributeurs du projet Github pour construire la prochaine version d’Engine',
  },
  {
    title: 'Template',
    description:
      'Template est un package node.js open-source permettant de générer une application basée sur Engine à partir d’un template de configuration JSON déjà existant, fonctionnel et pouvant être personnalisé. Parmi les templates proposés, on peut retrouver tous les types d’applications nécessaires au fonctionnement d’une organisation : CRM, landing page, messagerie interne, gestion de projet, facturation, etc… ',
    goal: 'Permettre à un développeur de générer une application répondant à des besoins spécifiques déjà identifiés dans le fonctionnement des organisations.',
    keyResult: 'Pouvoir générer des applications métiers spécifiques en moins de 5 minutes.',
    status: 'En attente de développement.',
    user: 'En attente de précision.',
    contributor: 'Tu es un développeur Typescript ? Contacte-nous pour rejoindre le projet.',
  },
  {
    title: 'Request',
    description:
      'Request est une plateforme de vente de service où les clients de Safidea peuvent faire des demandes liées à la mise en place ou à l’évolution de leur système d’information ou de leur culture d’entreprise. Les problématiques sont réglées par des outils Low Code ou notre propre technologie, Engine, permettant de construire le système d’information idéal et via du coaching des équipes sur le meilleur usage de ces outils.',
    goal: 'Permettre de résoudre les problématiques des clients de Safidea en leur proposant des solutions adaptées à leur besoin.',
    keyResult: 'Avoir 100% de satisfaction client.',
    status:
      'En fonctionnement depuis 6 ans avec des clients historiques et des demandes récurrentes.',
    user: 'Tu représentes une entreprise ayant des besoins d’automatisation de processus ou de mise en place de solution logicielle sur mesure ? Contacte-nous pour travailler avec nous.',
    contributor:
      'Tu es un développeur Typescript freelance ? Tu es à l’aise et/ou tu souhaites approfondir tes compétences dans la résolution de problématique logicielle client avec du coaching, du code et du no-code ? Contacte-nous pour rejoindre notre collectif.',
  },
  {
    title: 'System',
    description:
      'System est une plateforme low-code permettant l’édition et le déploiement d’applications web basées sur Engine, ainsi que la gestion des différents comptes utilisateurs pour les différentes applications.',
    goal: 'Permettre à un administrateur de gérer les applications et les utilisateurs de son organisation.',
    keyResult:
      'Pouvoir gérer les applications et les utilisateurs de son organisation en moins de 5 minutes.',
    status: 'En attente de développement',
    user: 'Tu représente une entreprise intéressée par un outil de pilotage, de développement et de gestion de système d’information ? Contacte-nous pour en savoir plus sur l’état du projet.',
    contributor: 'Tu es un développeur Typescript ? Contacte-nous pour rejoindre le projet.',
  },
]

const features: Component[] = projects.map((project) => ({
  component: 'Features',
  title: {
    text: project.title,
  },
  paragraph: {
    text: project.description,
  },
  features: [
    {
      title: {
        text: 'Objectif',
      },
      paragraph: {
        text: project.goal,
      },
      icon: {
        type: 'RocketLaunch',
      },
    },
    {
      title: {
        text: 'Résultat Clé',
      },
      paragraph: {
        text: project.keyResult,
      },
      icon: {
        type: 'Gift',
      },
    },
    {
      title: {
        text: 'État des lieux',
      },
      paragraph: {
        text: project.status,
      },
      icon: {
        type: 'ArrowTrendingUp',
      },
    },
    {
      title: {
        text: 'Devenir utilisateur',
      },
      paragraph: {
        text: project.user,
      },
      icon: {
        type: 'UserCircle',
      },
    },
    {
      title: {
        text: 'Contribuer',
      },
      paragraph: {
        text: project.contributor,
      },
      icon: {
        type: 'UserPlus',
      },
    },
  ],
}))

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
      id: 'projects',
      children: [
        {
          component: 'Title',
          text: 'Projets',
          align: 'center',
          size: 'xl',
        },
      ],
    },
    ...features,
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
    {
      component: 'Form',
      id: 'contact',
      title: {
        text: 'Nous contacter',
      },
      paragraph: {
        text: 'Envoyez-nous votre message.',
      },
      action:
        'https://hooks.airtable.com/workflows/v1/genericWebhook/appvfoFbHQxqYe621/wflEnWJ8P2EGrG4IU/wtrk3YVUvb1nB4yZu',
      inputs: [
        {
          name: 'name',
          label: 'Nom',
        },
        {
          name: 'email',
          label: 'Email',
        },
        {
          name: 'message',
          label: 'Message',
        },
      ],
      buttons: [
        {
          label: 'Envoyer',
          type: 'submit',
        },
      ],
      successMessage: 'Votre message a bien été envoyé.',
    },
    footer,
  ],
}
