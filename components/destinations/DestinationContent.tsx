import { useRef } from "react"
import ScrollToTopButton from "./ScrollToTopButton"
import ContentsIndex from "./ContentsIndex"
import { Mdx } from "@/components/destinations/MdxComponent"

const DestinationContent = ({
  destinationData,
  contentRef,
}: {
  destinationData: any
  contentRef: React.RefObject<HTMLDivElement>
}) => {
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

  return (
    <main className="container flex">
      <div
        ref={contentRef}
        className="w-full md:w-3/4 h-screen overflow-y-scroll scrollbar-hide relative" 
      >
        <div className="block md:hidden">
          <ContentsIndex onScrollToSection={onScrollToSection} />
        </div>
        <div id="content">
          <Mdx code={destinationData.body.code} />
        </div>
        <ScrollToTopButton targetRef={contentRef} />
      </div>
      <div className="hidden md:block h-screen sticky top-0 md:w-1/4 right-0">
        <ContentsIndex onScrollToSection={onScrollToSection} />
      </div>
    </main>
  )
}

export default DestinationContent
