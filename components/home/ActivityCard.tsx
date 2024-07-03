import React from "react"
import Link from "next/link"
import { ActivityItem } from "../../data/activities"

export const ActivityCard = ({ item }: { item: ActivityItem }) => {


  const destinationPath = `/activities/${item.id}`

  return (
    <li
      className="w-[240px] max-w-full h-[300px] relative rounded-2xl border border-b-0 flex-shrink-0 border-white px-4 py-2 md:w-[300px] flex justify-start shadow-lg"
      style={{
        backgroundImage: `url(${item.imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.1)",
      }}
      key={item.id}
    >
      <blockquote>
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>

        <div className="relative z-20 mt-2 flex flex-col items-start h-full justify-between">
          <div className="flex flex-col gap-1">
            <span className="uppercase text-sm text-white">{item.name}</span>
            <span className="text-xl font-semibold text-white">
              {item.title}
            </span>
          </div>
          <div className="relative z-20 mt-2 flex items-center mb-4">
            <Link href={destinationPath}>
              <button className="px-6 py-2 bg-transparent border dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                More Info
              </button>
            </Link>
          </div>
        </div>
      </blockquote>
    </li>
  )
}
