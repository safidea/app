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
}
