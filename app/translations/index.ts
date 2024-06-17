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
  engine: {
    heroTitle: string
    heroParagraph: string
    heroButtonLabel: string
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
    ctaTitle: string
    ctaParagraph: string
    ctaButtonLabel: string
  }
  templates: {
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
    title: string
    paragraph: string
    inputName: string
    inputEmail: string
    inputWhy: string
    inputHow: string
    inputWhat: string
    inputSkills: string
    button: string
    successMessage: string
  }
}
