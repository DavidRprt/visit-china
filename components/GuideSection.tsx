"use client"
import { StickyScroll } from "./ui/sticky-scroll"
import Image from "next/image"

const content = [
  {
    title: "Travel by Train",
    description:
      "China's extensive train network offers a convenient way to travel across the country. From high-speed trains to scenic routes, you can explore China comfortably and efficiently. Book your tickets in advance to ensure a smooth journey.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/train.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="train picture"
        />
      </div>
    ),
    titleColor: "text-slate-900",
    textColor: "text-slate-700",
  },
  {
    title: "Navigating the Metro",
    description:
      "Major cities like Beijing and Shanghai have well-developed metro systems. They are the fastest and most cost-effective way to get around the city. Make sure to get a metro card for easy access and convenience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/metro.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="metro map"
        />
      </div>
    ),
    titleColor: "text-slate-300",
    textColor: "text-slate-100",
  },
  {
    title: "Visa Assistance",
    description:
      "Navigating the visa application process can be complex. Ensure you have all the necessary documents and understand the requirements for your specific visa type. It's recommended to start the process well in advance of your trip to avoid any delays.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/visa.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="visa assistance"
        />
      </div>
    ),
    titleColor: "text-white",
    textColor: "text-slate-100",
  },
  {
    title: "Guide to China",
    description:
      "We have a comprehensive guide to help you navigate your trip to China. From transportation tips to cultural insights, our guide covers everything you need to know for a smooth and enjoyable journey.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-10">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="visit china logo"
        />
      </div>
    ),
    titleColor: "text-black",
    textColor: "text-slate-700",
    showButton: true,
  },
]

const GuideSection = () => {
  return (
    <section className="">
      <div className="padding-container max-container w-full pb-12 md:pb-12">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary">
          Discover China
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Our Guide
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
      <StickyScroll content={content} />
    </section>
  )
}

export default GuideSection
