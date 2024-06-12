import type { Translation } from '.'

export const fr: Translation = {
  path: '/fr',
  engine: {
    heroTitle: "Générer votre application web à partir d'une simple configuration",
    heroParagraph:
      "Nous contruisons un puissant moteur permettant la développement complet d'une application web depuis un fichier de configuration JSON.",
    heroButtonLabel: 'Ouvrir sur Github',
    heroButtonHref: 'https://github.com/safidea/engine',
    featuresTitle: "Quel est l'objectif de Safidea Engine ?",
    featuresParagraph:
      'Proposer tout ce dont tu as besoin pour créer et maintenir un logiciel en quelques minutes.',
    features: [
      {
        title: 'Page web static',
        paragraph: "Créer une page d'accueil, un blog ou un site vitrine.",
      },
      {
        title: 'Interface CRUD en temps réel',
        paragraph:
          "Manage une base de données avec des composants CRUD (formulaires de création, d'édition, listes, tableaux) et un affichage des données en temps réel.",
      },
      {
        title: 'Workflow automatisé',
        paragraph:
          'Automatise certaines tâches répétitives (calculs, envoi de mail, génération de documents).',
      },
      {
        title: 'Authentification',
        paragraph: "Sécurise l'accès à certaines pages en fonction du rôle de l'utilisateur.",
      },
      {
        title: 'Intégrations tierces',
        paragraph: "Connecte ton application à d'autres services (Stripe, Sendgrid, etc.).",
      },
      {
        title: 'Tests automatisés',
        paragraph:
          "Automatise les tests de ton application pour s'assurer de son intégrité à chaque modification.",
      },
    ],
    technologiesTitle: 'Technologies utilisées',
    technologiesParagraph:
      'Construit sur des outils performants et éprouvés.',
    technologies: [
      {
        title: 'Express JS',
        paragraph: 'Infrastructure Web minimaliste, souple et rapide pour Node.js',
      },
      {
        title: 'Hotwired Turbo',
        paragraph: 'La vitesse d\'une application Web d\'une seule page sans avoir à écrire de JavaScript.',
      },
      {
        title: 'Postgres',
        paragraph: 'La base de données relationnelle Open Source la plus avancée au monde.',
      },
    ],
    //ctaTitle: 'Construit un logiciel en quelques minutes',
  },
}
