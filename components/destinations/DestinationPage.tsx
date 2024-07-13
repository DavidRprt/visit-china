"use client"

import { useRef } from "react"
import HeroSection from "./HeroSection"
import ContentsIndex from "./ContentsIndex"
import BreadcrumbComponent from "../Breadcrumb"
import DestinationContent from "./DestinationContent"

const DestinationPage = ({ destinationData }: { destinationData: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (sectionRef.current) {
      const offset = 100
      const yCoordinate =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: yCoordinate, behavior: "smooth" })
    }
  }

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
        <div className="">
          <DestinationContent
            destinationData={destinationData}
            contentRef={contentRef}
            
          />
        </div>
      </div>
    </section>
  )
}

export default DestinationPage
