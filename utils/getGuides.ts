export interface GuideWithoutBody {
  id: string
  name: string
  intro: string
  location: string
  language: string
  image: string
}

export interface Guide extends GuideWithoutBody {
  body: string
}

import { allGuides } from "contentlayer/generated"

export const getGuides = (language: string): GuideWithoutBody[] => {
  return allGuides
    .filter((guide) => guide.language === language)
    .map(({ body, ...rest }) => rest) 
}

export const getGuideById = (id: string): Guide | undefined => {
  const guide = allGuides.find((guide) => guide.id === id) as Guide | undefined
  return guide
}
