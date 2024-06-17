import type { Component, Page } from '@safidea_/engine/page'
import { footer } from './components/footer'
import { header } from './components/header'
import type { Translation } from '../translations'

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
        text: 'Devenir client',
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

export const home = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/',
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
        text: 'Service IT sur-mesure dédiée à votre bien-être numérique',
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
      component: 'Form',
      id: 'contact',
      title: {
        text: 'Nous contacter',
      },
      paragraph: {
        text: 'Dites nous par quel projet vous êtes intéressé, que ce soit en tant que client ou contributeur, ou si vous avez une question ou un commentaire à nous faire parvenir.',
      },
      action: '/api/table/contacts',
      method: 'POST',
      inputs: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
        },
        {
          name: 'subject',
          label: 'Sujet',
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
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
    footer(t),
  ],
})
