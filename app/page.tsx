import DestinationsGrid from "@/components/home/DestinationsGrid"
import Hero from "@/components/home/Hero";
import GuideSection from "@/components/home/GuideSection"
import ActivitiesCarousel from "@/components/home/ActivitiesCarousel";
import NewsCarousel from "@/components/home/NewsCarousel"

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
