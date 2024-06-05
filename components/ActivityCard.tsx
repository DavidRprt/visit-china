import React from "react"
import { MapPinIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"


interface ActivityCardProps {
  imgUrl: string
  title: string
  location: string
  locationUrl: string
  moreInfoUrl: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  imgUrl,
  title,
  location,
  locationUrl,
  moreInfoUrl,
}) => {
  return (
    <div className="relative h-72 md:h-72 w-full rounded-xl overflow-hidden shadow-lg group">
      <img src={imgUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <p className="uppercase text-sm text-gray-300">{location}</p>
        <h5 className="text-xl font-semibold text-white">{title}</h5>
      </div>
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <Link
          href={locationUrl}
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <MapPinIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </Link>
        <Link
          href={moreInfoUrl}
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <InformationCircleIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </Link>
      </div>
    </div>
  )
}

export default ActivityCard
