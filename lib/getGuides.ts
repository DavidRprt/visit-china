export interface Guide {
  id: string
  name: string
  intro: string
  location: string
  language: string
  image: string
}


import { allGuides } from "contentlayer/generated"

export const getGuides = (language: string): Guide[] => {
  return allGuides
    .filter((guide) => guide.language === language)
    .map(({ body, ...rest }) => rest) 
}

