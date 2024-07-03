import React from "react"
import Link from "next/link"

interface DestinationCardProps {
  id: string
  imgUrl: string
  title: string
  location: string
  description: string
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  imgUrl,
  title,
  location,
  description,
}) => {
  const destinationPath = `/destinations/${id}`

  return (
    <Link href={destinationPath}>
      <div className="block relative h-72 md:h-72 w-full rounded-xl overflow-hidden shadow-lg group">
        <img src={imgUrl} alt={title} className="object-cover w-full h-full"/>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 z-10">
          <p className="uppercase text-sm text-gray-300">{location}</p>
          <div className="flex justify-between items-center">
            <h5 className="text-xl font-semibold text-white">{title}</h5>
            <button className="px-6 py-2 bg-transparent border dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer">
              More Info
            </button>
          </div>
        </div>
        <div className="absolute top-0 cursor-default left-0 w-full h-full bg-[#181818] bg-opacity-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80 transition-opacity duration-300 ease-in-out z-0 p-6 pointer-events-none">
          <div>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DestinationCard
