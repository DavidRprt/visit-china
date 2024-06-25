import React from "react"
import Link from "next/link"

interface DestinationCardProps {
  imgUrl: string
  title: string
  location: string
  description: string
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imgUrl,
  title,
  location,
  description,
}) => {
  const destinationPath = title
    .toLowerCase()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/ /g, "-")

  return (
    <Link href={destinationPath}>
      <div className="block relative h-72 md:h-72 w-full rounded-xl overflow-hidden shadow-lg group">
        <img src={imgUrl} alt={title} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 z-10">
          <p className="uppercase text-sm text-gray-300">{location}</p>
          <h5 className="text-xl font-semibold text-white">{title}</h5>
        </div>
        <div className="items-start justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-opacity transition-bg-opacity duration-300 ease-in-out z-0">
          <p className="text-white px-6 py-6">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default DestinationCard
