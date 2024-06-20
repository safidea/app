import { en } from './en'
import { fr } from './fr'

export const translations = [en, fr]

export type Translation = {
  path: string
  header: {
    productsAndServices: string
    whySafidea: string
    followTheAdventure: string
    contributeToTheProject: string
  }
  footer: {
    paragraph: string
    whySafidea: string
    followTheAdventure: string
    contributeToTheProject: string
  }
  home: {
    pageTitle: string
    pageDescription: string
    heroTitle: string
    heroParagraph: string
    heroCustomerButtonLabel: string
    heroContributorButtonLabel: string
    requestsTitle: string
    requestsParagraph: string
    requestsButtonLabel: string
    engineTitle: string
    engineParagraph: string
    engineButtonLabel: string
    templatesTitle: string
    templatesParagraph: string
    templatesButtonLabel: string
  }
  engine: {
    pageTitle: string
    pageDescription: string
    heroTitle: string
    heroParagraph: string
    heroGithubButtonLabel: string
    heroDocButtonLabel: string
    featuresTitle: string
    featuresParagraph: string
    features: {
      title: string
      paragraph: string
    }[]
    technologiesTitle: string
    technologiesParagraph: string
    technologies: {
      title: string
      paragraph: string
    }[]
    docTitle: string
    docParagraph: string
    docButtonLabel: string
    templatesTitle: string
    templatesParagraph: string
    templatesButtonLabel: string
  }
  templates: {
    pageTitle: string
    pageDescription: string
    heroTitle: string
    heroParagraph: string
    heroButtonLabel: string
    featuresTitle: string
    featuresParagraph: string
    features: {
      title: string
      paragraph: string
    }[]
    ctaTitle: string
    ctaParagraph: string
    ctaButtonLabel: string
  }
  requests: {
    pageTitle: string
    pageDescription: string
    heroTitle: string
    heroParagraph: string
    heroButtonLabel: string
    customersTitle: string
    featuresTitle: string
    featuresParagraph: string
    features: {
      title: string
      paragraph: string
    }[]
    ctaTitle: string
    ctaParagraph: string
    ctaButtonLabel: string
  }
  why: {
    pageTitle: string
    pageDescription: string
    heroTitle: string
    heroParagraph: string
    heroCustomerButtonLabel: string
    heroContributorButtonLabel: string
    manifeste: string
    toCustomers: string
    firstCustomersStatement: string
    firstCustomersStatementDescription: string
    secondCustomersStatement: string
    secondCustomersStatementDescription: string
    thirdCustomersStatement: string
    thirdCustomersStatementDescription: string
    toContributors: string
    firstContributorsStatement: string
    firstContributorsStatementDescription: string
    secondContributorsStatement: string
    secondContributorsStatementDescription: string
    thirdContributorsStatement: string
    thirdContributorsStatementDescription: string
  }
  follow: {
    pageTitle: string
    pageDescription: string
    title: string
    paragraph: string
    buttonLabel: string
    email: string
    emailPlaceholder: string
    successMessage: string
    founderTitle: string
    founderDescription: string
  }
  contribute: {
    pageTitle: string
    pageDescription: string
    title: string
    paragraph: string
    inputName: string
    inputNamePlaceholder: string
    inputEmail: string
    inputEmailPlaceholder: string
    inputWhy: string
    inputWhyPlaceholder: string
    inputHow: string
    inputHowPlaceholder: string
    inputWhat: string
    inputWhatPlaceholder: string
    inputSkills: string
    inputSkillsPlaceholder: string
    button: string
    successMessage: string
  }
}
