import { FC } from "react"
import { allGuides } from "@/.contentlayer/generated"
import { notFound } from "next/navigation"
import DestinationPage from "@/components/destinations/DestinationPage"

interface PageProps {
  params: {
    slug: string
  }
}

async function getGuideFromParams(slug: string) {
  const guide = allGuides.find((guide) => guide.id === slug)

  if (!guide) {
    notFound()
  }

  return guide
}

const Page: FC<PageProps> = async ({ params }) => {
  const guide = await getGuideFromParams(params.slug)

  return <DestinationPage destinationData={guide} />
}

export default Page
