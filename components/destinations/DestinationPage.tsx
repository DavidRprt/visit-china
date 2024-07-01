import { useRef } from "react"
import HeroSection from "./HeroSection"
import ContentsIndex from "./ContentsIndex"

interface Destination {
  id: string
  name: string
  title: string
  intro: string
  whatToSee: string
  whatToDo: string
  whereToStay: string
  mustSee: string
  howToMove: string
  daysToStay: string
  bestTimeToVisit: string
  whereToEat: string
  recommendedBudget: string
  photo: string
  location: string
}

interface Props {
  destinationData: Destination
}

const DestinationPage = ({ destinationData }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const contentsItems = [
    { id: "intro", label: "Introduction" },
    { id: "whatToSee", label: "What to See" },
    { id: "whatToDo", label: "What to Do" },
    { id: "whereToStay", label: "Where to Stay" },
    { id: "mustSee", label: "Must See" },
    { id: "howToMove", label: "How to Move" },
    { id: "daysToStay", label: "Days to Stay" },
    { id: "bestTimeToVisit", label: "Best Time to Visit" },
    { id: "whereToEat", label: "Where to Eat" },
    { id: "recommendedBudget", label: "Recommended Budget" },
  ]

  return (
    <section className="mb-8 md:mb-16">
      <HeroSection
        photo={destinationData.photo}
        title={destinationData.title}
        intro={destinationData.intro}
        onMoreInfoClick={handleScroll}
      />
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 container"
      >
        <main className="col-span-1 md:col-span-3">
          <div className="mb-4">
            <h2 id="whatToSee" className="text-2xl font-semibold mt-4">
              What to See
            </h2>
            <p className="mb-4">{destinationData.whatToSee}</p>
            <h2 id="whatToDo" className="text-2xl font-semibold mt-4">
              What to Do
            </h2>
            <p className="mb-4">{destinationData.whatToDo}</p>
            <h2 id="whereToStay" className="text-2xl font-semibold mt-4">
              Where to Stay
            </h2>
            <p className="mb-4">{destinationData.whereToStay}</p>
            <h2 id="mustSee" className="text-2xl font-semibold mt-4">
              Must See
            </h2>
            <p className="mb-4">{destinationData.mustSee}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div>
              <h2 id="howToMove" className="text-2xl font-semibold mt-4">
                How to Move
              </h2>
              <p className="mb-4">{destinationData.howToMove}</p>
              <h2 id="daysToStay" className="text-2xl font-semibold mt-4">
                Days to Stay
              </h2>
              <p className="mb-4">{destinationData.daysToStay}</p>
              <h2 id="bestTimeToVisit" className="text-2xl font-semibold mt-4">
                Best Time to Visit
              </h2>
              <p className="mb-4">{destinationData.bestTimeToVisit}</p>
            </div>
            <div>
              <h2 id="whereToEat" className="text-2xl font-semibold mt-4">
                Where to Eat
              </h2>
              <p className="mb-4">{destinationData.whereToEat}</p>
              <h2
                id="recommendedBudget"
                className="text-2xl font-semibold mt-4"
              >
                Recommended Budget
              </h2>
              <p className="mb-4">{destinationData.recommendedBudget}</p>
            </div>
          </div>
        </main>
        <ContentsIndex items={contentsItems} />
      </div>
    </section>
  )
}

export default DestinationPage
