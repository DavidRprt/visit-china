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

  const handleContentScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element && contentRef.current) {
      const offset = 300
      const yCoordinate =
        element.getBoundingClientRect().top +
        contentRef.current.scrollTop -
        offset
      contentRef.current.scrollTo({ top: yCoordinate, behavior: "smooth" })
    }
  }

  return (
    <section className="mb-8 md:mb-16 flex flex-col">
      <HeroSection
        photo={destinationData.photo}
        title={destinationData.title}
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
          <DestinationContent
            destinationData={destinationData}
            contentRef={contentRef}
            onScrollToSection={handleContentScroll}
          />
          <div className="hidden md:block h-screen sticky top-0 md:w-1/4 right-0">
            <ContentsIndex onScrollToSection={handleContentScroll} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationPage
