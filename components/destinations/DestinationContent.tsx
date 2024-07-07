import { useRef } from "react"
import ScrollToTopButton from "./ScrollToTopButton"
import ContentsIndex from "./ContentsIndex"

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
        <div id="introduction">
          <h1 className="text-4xl font-bold mb-4">{destinationData.title}</h1>
          <p className="text-lg mb-4">{destinationData.description}</p>
        </div>
        <div id="whatToSee" className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">
            {destinationData.whatToSee.title}
          </h2>
          <p className="text-lg mb-4">
            {destinationData.whatToSee.description}
          </p>
          <div>
            {destinationData.whatToSee.items.map(
              (item: { title: string; description: string }, index: number) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-slate-700">
                    {item.title}
                  </h3>
                  <p className="text-base">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div id="whatToDo" className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">
            {destinationData.whatToDo.title}
          </h2>
          <p className="text-lg mb-4">{destinationData.whatToDo.description}</p>
          <div>
            {destinationData.whatToDo.items.map(
              (item: { title: string; description: string }, index: number) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-slate-700">
                    {item.title}
                  </h3>
                  <p className="text-base">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div id="whereToStay" className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">
            {destinationData.whereToStay.title}
          </h2>
          <p className="text-lg mb-4">
            {destinationData.whereToStay.description}
          </p>
          <div>
            {destinationData.whereToStay.zones.map(
              (
                zone: {
                  title: string
                  areas: { title: string; description: string }[]
                },
                index: number
              ) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{zone.title}</h3>
                  <div>
                    {zone.areas.map(
                      (
                        area: { title: string; description: string },
                        areaIndex: number
                      ) => (
                        <div key={areaIndex} className="mb-6">
                          <h4 className="text-xl font-semibold mb-2 text-slate-700">
                            {area.title}
                          </h4>
                          <p className="text-base">{area.description}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
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
