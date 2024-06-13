import type { Translation } from '.'

export const fr: Translation = {
  path: '/fr',
  engine: {
    heroTitle: "Génére ton application web à partir d'une simple configuration",
    heroParagraph:
      "Nous contruisons un puissant moteur permettant le développement complet d'une application web depuis un fichier de configuration JSON.",
    heroButtonLabel: 'Ouvrir sur Github',
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
    technologiesParagraph: 'Construit sur des outils performants et éprouvés.',
    technologies: [
      {
        title: 'Express JS',
        paragraph: 'Infrastructure Web minimaliste, souple et rapide pour Node.js',
      },
      {
        title: 'Hotwired Turbo',
        paragraph:
          "La vitesse d'une application Web d'une seule page sans avoir à écrire de JavaScript.",
      },
      {
        title: 'Postgres',
        paragraph: 'La base de données relationnelle Open Source la plus avancée au monde.',
      },
    ],
    ctaTitle: 'Construit ton logiciel en quelques minutes',
    ctaParagraph:
      "Découvre comment Safidea Template peut t'aider à construire ton application web à partir de modèle de configuration prédéfini.",
    ctaButtonLabel: 'Découvrir Safidea Template',
  },
  templates: {
    heroTitle: 'Développe sans partir de zero',
    heroParagraph:
      'Nous construisons des modèles de configuration prédéfinis pour te permettre de développer ton application web en quelques minutes.',
    heroButtonLabel: 'Voir les modèles',
    featuresTitle: 'Pourquoi utiliser Safidea Template ?',
    featuresParagraph:
      'Gagne du temps en utilisant des modèles de configuration prédéfinis pour construire ton application web.',
    features: [
      {
        title: "Prêt à l'emploi",
        paragraph:
          'Utilise des modèles de configuration prédéfinis pour construire ton application web en quelques minutes.',
      },
      {
        title: 'Personnalisable',
        paragraph:
          'Personnalise les modèles de configuration prédéfinis pour répondre à tes besoins spécifiques.',
      },
      {
        title: 'Open Source',
        paragraph:
          'Tous les modèles de configuration prédéfinis sont open source et peuvent être modifiés librement.',
      },
    ],
    ctaTitle: 'Fait toi accompagné pour construire ton application web en quelques minutes',
    ctaParagraph:
      "Découvre comment Safidea Requests peut t'aider à construire ton application web à partir de modèle de configuration prédéfini.",
    ctaButtonLabel: 'Découvrir Safidea Requests',
  },
}
