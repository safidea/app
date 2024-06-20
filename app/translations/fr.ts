import type { Translation } from '.'

export const fr: Translation = {
  path: '/fr',
  header: {
    productsAndServices: 'Nos produits & services',
    whySafidea: 'Pourquoi Safidea ?',
    followTheAdventure: "Suivre l'aventure",
    contributeToTheProject: 'Devenir contributeur',
  },
  footer: {
    paragraph:
      'Safidea est un service IT sur-mesure dédié à votre bien-être numérique. Ce site web a été développé avec Engine.',
    whySafidea: 'Pourquoi Safidea ?',
    followTheAdventure: "Suivre l'aventure",
    contributeToTheProject: 'Devenir contributeur',
  },
  home: {
    pageTitle: 'Service IT sur-mesure dédiée à votre bien-être numérique',
    pageDescription:
      'Nous vous accompagnons dans la conception, le développement et la maintenance de vos outils métiers grâce à notre expertise.',
    heroTitle: 'Service IT sur-mesure dédiée à votre bien-être numérique',
    heroParagraph:
      'Nous vous accompagnons dans la conception, le développement et la maintenance de vos outils métiers grâce à notre expertise.',
    heroCustomerButtonLabel: 'Devenir client',
    heroContributorButtonLabel: 'Devenir contributeur',
    requestsTitle: 'Requests, notre service de gestion des demandes IT',
    requestsParagraph:
      'Requests est service en ligne dédié à la gestion de vos demande de conseil techniques, de nouveaux outils, de nouvelles fonctionnalités ou de maintenance.',
    requestsButtonLabel: 'En savoir plus',
    engineTitle: "Engine, notre technologie open-source de génération d'application web",
    engineParagraph:
      "Engine est un moteur de génération d'application web à partir d'un fichier de configuration JSON.",
    engineButtonLabel: 'En savoir plus',
    templatesTitle: 'Templates, nos modèles de configuration prédéfinis',
    templatesParagraph:
      'Templates est une application web qui vous permet de générer des applications web à partir de modèles de configuration prédéfinis.',
    templatesButtonLabel: 'En savoir plus',
  },
  engine: {
    pageTitle: "Générez votre application web à partir d'une simple configuration",
    pageDescription:
      "Nous construisons un puissant moteur permettant le développement complet d'une application web depuis un fichier de configuration JSON.",
    heroTitle: "Générez votre application web à partir d'une simple configuration",
    heroParagraph:
      "Nous construisons un puissant moteur permettant le développement complet d'une application web depuis un fichier de configuration JSON.",
    heroGithubButtonLabel: 'Ouvrir sur Github',
    heroDocButtonLabel: 'Voir le schema JSON',
    featuresTitle: "Quel est l'objectif de Engine ?",
    featuresParagraph:
      'Proposer tout ce dont vous avez besoin pour créer et maintenir un logiciel en quelques minutes.',
    features: [
      {
        title: 'Page web static',
        paragraph: "Créer une page d'accueil, un blog ou un site vitrine.",
      },
      {
        title: 'Interface CRUD en temps réel',
        paragraph:
          "Gérez une base de données avec des composants CRUD (formulaires de création, d'édition, listes, tableaux) et un affichage des données en temps réel.",
      },
      {
        title: 'Workflow automatisé',
        paragraph:
          'Automatisez certaines tâches répétitives (calculs, envoi de mail, génération de documents).',
      },
      {
        title: 'Authentification',
        paragraph: "Sécurisez l'accès à certaines pages en fonction du rôle de l'utilisateur.",
      },
      {
        title: 'Intégrations tierces',
        paragraph: "Connectez votre application à d'autres services (Stripe, Sendgrid, etc.).",
      },
      {
        title: 'Tests automatisés',
        paragraph:
          "Automatisez les tests de votre application pour s'assurer de son intégrité à chaque modification.",
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
    docTitle: 'Apprenez à configurer Engine',
    docParagraph:
      'Découvrez comment configurer Engine pour construire votre application web en quelques minutes.',
    docButtonLabel: 'Voir le schema JSON',
    templatesTitle: 'Construisez votre logiciel en quelques minutes',
    templatesParagraph:
      'Découvrez comment Templates peut vous aider à construire votre application web à partir de modèles de configuration prédéfinis.',
    templatesButtonLabel: 'Découvrir Templates',
  },
  templates: {
    pageTitle: 'Développez sans partir de zéro',
    pageDescription:
      'Nous construisons des modèles de configuration prédéfinis pour vous permettre de développer votre application web en quelques minutes.',
    heroTitle: 'Développez sans partir de zéro',
    heroParagraph:
      'Nous construisons des modèles de configuration prédéfinis pour vous permettre de développer votre application web en quelques minutes.',
    heroButtonLabel: 'Ouvrir sur Github',
    featuresTitle: 'Pourquoi utiliser Templates ?',
    featuresParagraph:
      'Gagnez du temps en utilisant des modèles de configuration prédéfinis pour construire votre application web.',
    features: [
      {
        title: "Prêt à l'emploi",
        paragraph:
          'Utilisez des modèles de configuration prédéfinis pour construire votre application web en quelques minutes.',
      },
      {
        title: 'Personnalisable',
        paragraph:
          'Personnalisez les modèles de configuration prédéfinis pour répondre à vos besoins spécifiques.',
      },
      {
        title: 'Open Source',
        paragraph:
          'Tous les modèles de configuration prédéfinis sont open source et peuvent être modifiés librement.',
      },
    ],
    ctaTitle: 'Faites-vous accompagner pour construire votre application web en quelques minutes',
    ctaParagraph:
      'Découvrez comment Requests peut vous aider à construire votre application web à partir de modèles de configuration prédéfinis.',
    ctaButtonLabel: 'Découvrir Requests',
  },
  requests: {
    pageTitle: 'Votre service IT sur-mesure à la demande',
    pageDescription:
      'Nous vous accompagnons dans la conception, le développement et la maintenance de vos outils métiers grâce à notre expertise.',
    heroTitle: 'Votre service IT sur-mesure à la demande',
    heroParagraph:
      'Nous vous accompagnons dans la conception, le développement et la maintenance de vos outils métiers grâce à notre expertise.',
    heroButtonLabel: 'Faire une requête',
    customersTitle: 'Ils nous font confiance',
    featuresTitle: 'Nos services',
    featuresParagraph:
      "Nous vous proposons tous les services nécessaires pour la construction de votre système d'information.",
    features: [
      {
        title: 'Développement web',
        paragraph:
          'Nous construisons des applications web en utilisant les dernières technologies.',
      },
      {
        title: 'Développement mobile',
        paragraph:
          'Nous construisons des applications mobiles en utilisant les dernières technologies.',
      },
      {
        title: 'DevOps',
        paragraph:
          'Nous automatisons le déploiement et assurons la maintenance de votre application.',
      },
      {
        title: 'Consulting',
        paragraph: "Nous vous conseillons pour la construction de votre système d'information.",
      },
      {
        title: 'Formation',
        paragraph: "Nous vous formons pour la construction de votre système d'information.",
      },
      {
        title: 'Support',
        paragraph:
          'Nous assurons le support de votre application pour garantir son bon fonctionnement.',
      },
    ],
    ctaTitle: 'Travaillons ensemble !',
    ctaParagraph: "Ne soyez plus bloqués par le développement d'un nouvel outil",
    ctaButtonLabel: 'Faire une requête',
  },
  why: {
    pageTitle: 'Pourquoi Safidea ?',
    pageDescription:
      'Nous prenons soin des collaborations humaines. Nous construisons des outils informatiques vous permettant de vous concentrer sur l’essentiel de votre métier.',
    heroTitle: 'Nous prenons soin des collaborations humaines.',
    heroParagraph:
      'Nous construisons des outils informatiques vous permettant de vous concentrer sur l’essentiel de votre métier.',
    heroCustomerButtonLabel: 'Devenir client',
    heroContributorButtonLabel: 'Devenir contributeur',
    manifeste: 'Manifeste',
    toCustomers: "À l'intention de nos clients",
    firstCustomersStatement: 'Un outil informatique devrait être simple à créer et à modifier.',
    firstCustomersStatementDescription:
      "Il existe des technologies permettant la création rapide d'outils et la facilité d'évolution. Notre service Requests vous permet de faire appel aux compétences nécessaires pour cela, vous permettant de vous focaliser sur les besoins et enjeux métiers.",
    secondCustomersStatement: 'Un outil informatique devrait être facile à utiliser.',
    secondCustomersStatementDescription:
      "Nous cherchons la solution technique la plus simple permettant de répondre pertinament à la complexité de vos besoins. Nous nous efforçons de rendre l'expérience utilisateur la plus agréable possible, en nous basant sur les retours de nos clients.",
    thirdCustomersStatement: 'Un outil informatique devrait être souverain.',
    thirdCustomersStatementDescription:
      'Suivant les besoins, nous vous garantissons la propriété de vos données et de vos outils. Nous vous accompagnons dans la mise en place de solutions techniques respectueuses de votre souveraineté numérique.',
    toContributors: "À l'intention de nos contributeurs",
    firstContributorsStatement: 'Le travail devrait être consenti.',
    firstContributorsStatementDescription:
      'Notre organisation demande le consentement de chacun de ses contributeurs pour chaque décision impactant son quotidien.',
    secondContributorsStatement: 'Le travail devrait être responsable.',
    secondContributorsStatementDescription:
      "Chaque contributeur est responsable de la qualité de son travail et de son impact sur l'organisation. Nous demandons la prise de responsabilité et l'autonomie dans le travail de chacun.",
    thirdContributorsStatement: 'Le travail devrait être justement rémunéré.',
    thirdContributorsStatementDescription:
      'Nous garantissons une rémunération juste et équitable pour chaque contributeur, en fonction de son implication et de son expertise.',
  },
  follow: {
    pageTitle: "Suivez l'aventure",
    pageDescription:
      "Thomas, le fondateur de Safidea, partagera régulièrement les échecs, les réussites et les apprentissages de l'organisation.",
    title: "Suivez l'aventure",
    paragraph:
      "Thomas, le fondateur de Safidea, partagera régulièrement les échecs, les réussites et les apprentissages de l'organisation.",
    email: 'Saisissez votre adresse email',
    emailPlaceholder: 'prenom.nom@gmail.com',
    buttonLabel: "S'inscrire à la newsletter",
    successMessage: 'Votre inscription à notre newsletter bien été enregistrée.',
    founderTitle: 'Fondateur',
    founderDescription:
      "J’ai décidé de créer Safidea car je suis profondément persuadé que la technologie est sous-exploitée, mal utilisée, mal perçue, gangrénée par des dynamiques capitalistes. Elle ne devrait pas créer de problème. Dans un monde du travail où la notion d’humain est absente, j'estime que prendre soin des autres n’est pas un luxe qu’on peut se permettre, mais une nécessité pour créer une société plus juste et plus épanouissante.",
  },
  contribute: {
    pageTitle: 'Devenez contributeur',
    pageDescription:
      "Que vous souhaitiez contribuer à nos projets open-source ou au développement de nos produits et services, nous serions ravis de vous accueillir dans l'organisation.",
    title: 'Devenez contributeur',
    paragraph:
      "Que vous souhaitiez contribuer à nos projets open-source ou au développement de nos produits et services, nous serions ravis de vous accueillir dans l'organisation.",
    inputName: 'Votre nom',
    inputEmail: 'Votre email',
    inputWhy: 'Pourquoi souhaitez-vous contribuer ?',
    inputHow: 'Comment souhaitez-vous contribuer ?',
    inputWhat: 'Sur quels projets souhaitez-vous contribuer ?',
    inputSkills: 'Quelles sont vos compétences ?',
    button: 'Envoyer',
    successMessage: 'Votre demande de contribution a bien été enregistrée.',
  },
}
