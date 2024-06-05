"use client"
import Image from "next/image"
import React, { useRef } from "react"
import ActivityCard from "./ActivityCard"
import { motion, useInView } from "framer-motion"

const activities = [
  {
    imgUrl: "/destination-2.jpg",
    title: "Shanghai Skyline",
    location: "Shanghai",
    locationUrl: "https://maps.example.com/shanghai-skyline",
    moreInfoUrl: "https://tripadvisor.com/shanghai-skyline",
  },
  {
    imgUrl: "/destination-2.jpg",
    title: "Great Wall of China",
    location: "Beijing",
    locationUrl: "https://maps.example.com/great-wall",
    moreInfoUrl: "https://tripadvisor.com/great-wall",
  },
  {
    imgUrl: "/destination-2.jpg",
    title: "Terracotta Army",
    location: "Xi'an",
    locationUrl: "https://maps.example.com/terracotta-army",
    moreInfoUrl: "https://tripadvisor.com/terracotta-army",
  },
  {
    imgUrl: "/destination-2.jpg",
    title: "Forbidden City",
    location: "Beijing",
    locationUrl: "https://maps.example.com/forbidden-city",
    moreInfoUrl: "https://tripadvisor.com/forbidden-city",
  },
  {
    imgUrl: "/destination-2.jpg",
    title: "The Bund",
    location: "Shanghai",
    locationUrl: "https://maps.example.com/the-bund",
    moreInfoUrl: "https://tripadvisor.com/the-bund",
  },
  {
    imgUrl: "/destination-2.jpg",
    title: "Li River Cruise",
    location: "Guilin",
    locationUrl: "https://maps.example.com/li-river",
    moreInfoUrl: "https://tripadvisor.com/li-river",
  },
]

const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
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
      <div
        ref={ref}
        className="padding-container max-container w-full pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.2, delay: index * 0.4 }}
            >
              <ActivityCard
                key={index}
                imgUrl={activity.imgUrl}
                title={activity.title}
                location={activity.location}
                locationUrl={activity.locationUrl}
                moreInfoUrl={activity.moreInfoUrl}
              />
            </motion.div>
          ))}
      </div>
    </section>
  )
}

export default Activities
