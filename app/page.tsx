import DestinationsGrid from "@/components/DestinationsGrid"
import Hero from "@/components/Hero";
import GuideSection from "@/components/GuideSection"
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import NewsCarousel from "@/components/NewsCarousel"

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsGrid />
      <ActivitiesCarousel />
      <GuideSection />
      <NewsCarousel />
    </>
  )
}
