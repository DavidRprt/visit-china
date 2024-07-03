import React from "react"
import { ActivityItem } from "@/data/activities"
import BreadcrumbComponent from "@/components/Breadcrumb"

const ActivityPage = ({ activity }: { activity: ActivityItem }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-3">
        <BreadcrumbComponent
          href="/activities"
          item="Activities"
          page={activity.title}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src={activity.imgUrl}
            alt={activity.title}
            className="w-full h-64 md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{activity.title}</h1>
            <p className="text-lg mb-2">
              <strong>Location:</strong> {activity.nearestCity}
            </p>
            <p className="text-lg mb-2">
              <strong>How to Get There:</strong> {activity.howToGetThere}
            </p>
            <div className="flex items-start flex-col justify-start">
              <p className="text-lg mb-2">
                <strong>Price</strong> from {activity.price}
              </p>
              <div className="mt-4 space-y-4 flex flex-col w-full">
                <a
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 w-full bg-white text-black font-bold rounded-lg shadow-md hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <img
                    src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png"
                    alt="TripAdvisor Logo"
                    className="w-6 h-6 mr-2"
                  />
                  Book on TripAdvisor
                </a>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 w-full bg-white text-black font-bold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <img
                    src="https://logos-world.net/wp-content/uploads/2021/08/Booking-Symbol.png"
                    alt="Booking.com Logo"
                    className="w-6 h-4 mr-2"
                  />
                  Book on Booking.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg mb-2">
          <strong>Description:</strong>
        </p>
        <p className="text-lg mb-2">{activity.description}</p>
      </div>
    </div>
  )
}

export default ActivityPage
