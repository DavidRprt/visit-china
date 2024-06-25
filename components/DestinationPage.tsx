
import Image from "next/image"

interface Destination {
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
}

interface Props {
  destinationData: Destination
}

const DestinationPage = ({ destinationData }: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{destinationData.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <Image
            src={destinationData.photo}
            alt={destinationData.name}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <p className="mb-4">{destinationData.intro}</p>
          <h2 className="text-2xl font-semibold mt-4">What to See</h2>
          <p className="mb-4">{destinationData.whatToSee}</p>
          <h2 className="text-2xl font-semibold mt-4">What to Do</h2>
          <p className="mb-4">{destinationData.whatToDo}</p>
          <h2 className="text-2xl font-semibold mt-4">Where to Stay</h2>
          <p className="mb-4">{destinationData.whereToStay}</p>
          <h2 className="text-2xl font-semibold mt-4">Must See</h2>
          <p className="mb-4">{destinationData.mustSee}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div>
          <h2 className="text-2xl font-semibold mt-4">How to Move</h2>
          <p className="mb-4">{destinationData.howToMove}</p>
          <h2 className="text-2xl font-semibold mt-4">Days to Stay</h2>
          <p className="mb-4">{destinationData.daysToStay}</p>
          <h2 className="text-2xl font-semibold mt-4">Best Time to Visit</h2>
          <p className="mb-4">{destinationData.bestTimeToVisit}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mt-4">Where to Eat</h2>
          <p className="mb-4">{destinationData.whereToEat}</p>
          <h2 className="text-2xl font-semibold mt-4">Recommended Budget</h2>
          <p className="mb-4">{destinationData.recommendedBudget}</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage
