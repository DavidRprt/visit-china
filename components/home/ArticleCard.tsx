import * as React from "react"
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

interface NewCardProps {
  title: string
  city?: string
  date: string
  photo: string
  id: string
}

const ArticleCard: React.FC<NewCardProps> = ({ title, city, date, photo, id }) => {
  return (
    <Link href={`/articles/${id}`}>
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
          <span className="text-lg font-semibold group-hover:underline">
            {title}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard