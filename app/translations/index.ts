import { en } from './en'
import { fr } from './fr'

export const translations = [en, fr]

export type Translation = {
  path: string
  engine: {
    heroTitle: string
    heroParagraph: string
    heroButtonLabel: string
    heroButtonHref: string
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
    ctaButtonHref: string
  }
}
