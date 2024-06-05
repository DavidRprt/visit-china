import Image from "next/image"
import React from "react"

const Activities = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary ">
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
    </section>
  )
}

export default Activities
