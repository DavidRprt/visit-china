"use client"

import { useRef, useEffect, useState } from "react"
import HeroSection from "./HeroSection"
import BreadcrumbComponent from "../Breadcrumb"
import ScrollToTopButton from "./ScrollToTopButton"
import { Mdx } from "@/components/destinations/MdxComponent"
import ContentsIndex from "./ContentsIndex"

const predefinedIds: {
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

const DestinationPage = ({ destinationData }: { destinationData: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentIds, setContentIds] = useState<{ id: string; title: string }[]>(
    []
  )

  const handleScroll = () => {
    if (sectionRef.current) {
      const offset = 100
      const yCoordinate =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: yCoordinate, behavior: "smooth" })
    }
  }

  const onScrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element && contentRef.current) {
      const offset = 140
      const yCoordinate =
        element.getBoundingClientRect().top +
        contentRef.current.scrollTop -
        offset
      contentRef.current.scrollTo({ top: yCoordinate, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const divs = contentRef.current?.querySelectorAll("div[id]")
    const ids = Array.from(divs || []).map((div) => ({
      id: div.id,
      title:
        predefinedIds[div.id as keyof typeof predefinedIds]?.[
          destinationData.language as "es" | "en"
        ] || div.id,
    }))
    setContentIds(ids)
  }, [destinationData.language])

  return (
    <section className="mb-8 md:mb-16 flex flex-col">
      <HeroSection
        photo={destinationData.image}
        title={destinationData.name}
        intro={destinationData.intro}
        onMoreInfoClick={handleScroll}
      />
      <div
        className="flex flex-col items-start justify-center"
        ref={sectionRef}
      >
        <div className="mb-4 container">
          <BreadcrumbComponent
            href="/destinations"
            item="Destinations"
            page={destinationData.name}
          />
        </div>
        <div className="container flex">
          <div
            ref={contentRef}
            className="w-full md:w-3/4 h-screen overflow-y-scroll scrollbar-hide relative"
          >
            <div className="block md:hidden">
              <ContentsIndex
                contentsItems={contentIds}
                onScrollToSection={onScrollToSection}
              />
            </div>
            <div>
              <Mdx code={destinationData.body.code} />
            </div>
            <ScrollToTopButton targetRef={contentRef} />
          </div>
          <div className="hidden md:block h-screen sticky top-0 md:w-1/4 right-0">
            <ContentsIndex
              contentsItems={contentIds}
              onScrollToSection={onScrollToSection}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationPage
