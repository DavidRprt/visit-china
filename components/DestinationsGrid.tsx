"use client"
import Image from "next/image"
import React, { useRef } from "react"
import DestinationCard from "./DestinationCard"
import { motion, useInView } from "framer-motion"
const activities = [
  {
    imgUrl: "/destination-2.jpg",
    title: "Shanghai",
    location: "East China",
    description:
      "Shanghai, located on China's central coast, is the country's biggest city and a global financial hub. It's renowned for its modern skyline, vibrant culture, and historic sites.",
  },
  {
    imgUrl: "/beijing.jpg",
    title: "Beijing",
    location: "North China",
    description:
      "Beijing, the capital of China, is rich in history and culture. It is home to ancient landmarks such as the Forbidden City, the Great Wall, and the Summer Palace.",
  },
  {
    imgUrl: "/xian.jpg",
    title: "Xi'an",
    location: "Northwest China",
    description:
      "Xi'an, in the Shaanxi province, is known for its rich history and as the starting point of the Silk Road. It's home to the famous Terracotta Army.",
  },
  {
    imgUrl: "/zhangjiajie.jpg",
    title: "Zhangjiajie National Forest Park",
    location: "Central China",
    description:
      "Zhangjiajie National Forest Park, in Hunan province, is known for its towering sandstone pillars, lush forests, and breathtaking scenery. It inspired the landscapes in the movie 'Avatar'.",
  },
  {
    imgUrl: "/chengdu.jpg",
    title: "Chengdu",
    location: "Southwest China",
    description:
      "Chengdu, the capital of Sichuan province, is famous for its panda sanctuaries and vibrant culinary scene. It's a city that combines modernity with rich cultural heritage.",
  },
  {
    imgUrl: "great-wall.jpg",
    title: "Great Wall of China",
    location: "North China",
    description:
      "The Great Wall of China, one of the most iconic landmarks in the world, stretches over 13,000 miles and offers breathtaking views and a glimpse into China's ancient history.",
  },
]

const DestinationsGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-12 md:pb-24">
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
            <DestinationCard
              key={index}
              imgUrl={activity.imgUrl}
              title={activity.title}
              location={activity.location}
              description={activity.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default DestinationsGrid
