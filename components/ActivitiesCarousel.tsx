import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const ActivitiesCarousel = () => {
const items = [
  {
    name: "Xi'an",
    title: "Terracotta Warriors",
    imgUrl: "/terracotta-warriors.jpg",
  },
  {
    name: "Shanghai",
    title: "Disneyland",
    imgUrl: "/disney-shangai.jpeg",
  },
  {
    name: "Beijing",
    title: "Universal Studios",
    imgUrl: "/universal-studios-beijing.jpg",
  },
  {
    name: "Guilin",
    title: "Li River Cruise",
    imgUrl: "/li-river-cruise.jpeg",
  },
  {
    name: "Beijing",
    title: "Forbidden City",
    imgUrl: "/forbidden-city.avif",
  },
  {
    name: "Lhasa",
    title: "Potala Palace",
    imgUrl: "/potala-palace.jpeg",
  },
]

  return (
    <section className="padding-container pb-12 md:pb-24">
      <div className="max-container w-full pb-12 md:pb-24">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary">
          Discover China
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Unforgettable Experiences Await
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Explore the beauty and culture of China with our curated list of
            activities. From hiking the majestic Great Wall to enjoying the
            bustling nightlife of Shanghai, there's something for everyone. Our
            recommendations include links to Tripadvisor so you can plan your
            trip with ease. Whether you're traveling solo or with friends and
            family, China offers endless adventures and memories to create.
          </p>
        </div>
      </div>
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="custom-class"
      />
    </section>
  )
}

export default ActivitiesCarousel
