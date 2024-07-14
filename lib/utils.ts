import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const predefinedIds: {
  [key: string]: {
    es: string
    en: string
  }
} = {
  intro: {
    es: "Introducción",
    en: "Introduction",
  },
  whatToSee: {
    es: "Qué ver",
    en: "What to See",
  },
  whatToDo: {
    es: "Qué hacer",
    en: "What to Do",
  },
  whereToSleep: {
    es: "Dónde dormir",
    en: "Where to Sleep",
  },
  howManyDays: {
    es: "Cuántos días",
    en: "How Many Days",
  },
  moveAround: {
    es: "Cómo moverse",
    en: "How to Move Around",
  },
  timeToVisit: {
    es: "Mejor época para visitar",
    en: "Best Time to Visit",
  },
  whatToEat: {
    es: "Qué comer",
    en: "What to Eat",
  },
  faq: {
    es: "Preguntas frecuentes",
    en: "FAQ",
  },
}
