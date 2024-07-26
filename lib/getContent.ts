


import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { allArticles } from "contentlayer/generated"
import { allGuides } from "contentlayer/generated"

export interface Guide {
  id: string
  name: string
  intro: string
  location: string
  language: string
  image: string
}

export interface Article {
  id: string
  titulo: string
  fecha: string
  idioma: string
  imagen: string
}

export const getGuides = (language: string): Guide[] => {
  return allGuides
    .filter((guide) => guide.language === language)
    .map(({ body, ...rest }) => rest) 
}

export const getArticles = (language: string): Article[] => {
  return allArticles
    .filter((article) => article.idioma === language)
    .map(({ body, ...rest }) => rest)
}

