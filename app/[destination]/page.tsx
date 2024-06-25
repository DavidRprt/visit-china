"use client"

import { useParams } from "next/navigation"
import { destinations } from "@/data/destinations"
import DestinationPage from "@/components/DestinationPage"

const Destination = () => {
  const params = useParams<{ destination: string }>()
  const destination = params?.destination
  const destinationData = destination ? destinations[destination] : null

  

  if (!destinationData) {
    return <div>Destination not found.</div>
  }

  return <DestinationPage destinationData={destinationData} />
}

export default Destination
