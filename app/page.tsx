import DestinationsGrid from "@/components/home/DestinationsGrid"
import Hero from "@/components/home/Hero";
import GuideSection from "@/components/home/GuideSection"
import ActivitiesCarousel from "@/components/home/ActivitiesCarousel";
import ArticleCarousel from "@/components/home/ArticleCarousel"

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsGrid />
      <ActivitiesCarousel />
      <GuideSection />
      <ArticleCarousel />
    </>
  )
}
