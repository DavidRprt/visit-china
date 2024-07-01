import * as React from "react"
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

interface NewCardProps {
  title: string
  city?: string
  date: string
  photo: string
}

const NewCard: React.FC<NewCardProps> = ({ title, city, date, photo }) => {
  return (
    <div className="p-1 cursor-pointer group">
      <div className="relative overflow-hidden">
        <Image
          src={photo}
          alt={title}
          width="500"
          height="500"
          className="transition-transform duration-300 ease-in-out "
        />
        <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-2 text-white">
          {city && (
            <div className="flex items-center mb-1">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>{city}</span>
            </div>
          )}
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-lg font-semibold group-hover:underline">{title}</span>
      </div>
    </div>
  );
}


const articles = [
  {
    title: "Exploring the Great Wall of China",
    city: "Beijing",
    date: "2024-06-15",
    photo: "/li-river-cruise.jpeg",
  },
  {
    title: "A Culinary Journey Through Sichuan",
    city: "Chengdu",
    date: "2024-06-10",
    photo: "/li-river-cruise.jpeg",
  },
  {
    title: "The Mystical Landscapes of Zhangjiajie",
    city: "Zhangjiajie",
    date: "2024-06-05",
    photo: "/li-river-cruise.jpeg",
  },
  {
    title: "Modern Wonders: Shanghai's Skyline",
    city: "Shanghai",
    date: "2024-06-01",
    photo: "/li-river-cruise.jpeg",
  },
  {
    title: "Ancient History: The Terracotta Army",
    city: "Xi'an",
    date: "2024-05-28",
    photo: "/li-river-cruise.jpeg",
  },
  {
    title: "Peaceful Retreats: West Lake in Hangzhou",
    city: "Hangzhou",
    date: "2024-05-20",
    photo: "/li-river-cruise.jpeg",
  },
]

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const NewsCarousel = () => {
  return (
    <section className="padding-container">
      <div className="max-container w-full pb-12 md:pb-16 mt-12 md:mt-24">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary">
          Discover China
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Our Latest News
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            quo dolore maxime magnam excepturi ex voluptas, ipsam dolorem itaque
            possimus dolor eaque nam fugit reiciendis, a quidem cum omnis
            quaerat?
          </p>
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="px-4 md:px-0">
          {articles.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <NewCard
                title={article.title}
                city={article.city}
                date={article.date}
                photo={article.photo}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default NewsCarousel
