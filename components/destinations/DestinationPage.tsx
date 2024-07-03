import { useRef } from "react";
import HeroSection from "./HeroSection";
import ContentsIndex from "./ContentsIndex";
import BreadcrumbComponent from "../Breadcrumb";
import { PhotoGrid } from "./PhotoGrid"

interface Destination {
  id: string;
  name: string;
  title: string;
  intro: string;
  whatToSee: string;
  whatToDo: string;
  whereToStay: string;
  mustSee: string;
  howToMove: string;
  daysToStay: string;
  bestTimeToVisit: string;
  whereToEat: string;
  recommendedBudget: string;
  photo: string;
  location: string;
}

interface Props {
  destinationData: Destination;
}

const cards = [
  {
    id: 1,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">House in the woods</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a
          peaceful escape from the hustle and bustle of city life.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "/destination-2.jpg",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">House above the clouds</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and
          a unique living experience.
        </p>
      </div>
    ),
    className: "col-span-1",
    thumbnail: "/destination-2.jpg",
  },
  {
    id: 3,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">Greens all over</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature's beauty.
        </p>
      </div>
    ),
    className: "col-span-1",
    thumbnail: "/destination-2.jpg",
  },
  {
    id: 4,
    content: (
      <div>
        <p className="font-bold text-4xl text-white">Rivers are serene</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It's the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "/destination-2.jpg",
  },
];

const DestinationPage = ({ destinationData }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);

const handleScroll = () => {
  if (sectionRef.current) {
    const offset = 100 
    const yCoordinate =
      sectionRef.current.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: yCoordinate, behavior: "smooth" })
  }
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
  ];

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
            page={destinationData.title}
          />
        </div>
        <div className="block md:hidden container">
          <ContentsIndex items={contentsItems} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 container">
          <main className="col-span-1 md:col-span-3 overflow-auto scrollbar-hide">
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
                <h2
                  id="bestTimeToVisit"
                  className="text-2xl font-semibold mt-4"
                >
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
            <h2 id="gallery" className="text-2xl font-semibold my-4">
              Photo Gallery
            </h2>
            <PhotoGrid cards={cards} />
          </main>
          <div className="hidden md:block h-screen sticky top-0">
            <ContentsIndex items={contentsItems} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default DestinationPage;