import DestinationsGrid from "@/components/DestinationsGrid"
import Hero from "@/components/Hero";
import EmailSection from "@/components/EmailSection";
import GuideSection from "@/components/GuideSection"
import ActivitiesCarousel from "@/components/ActivitiesCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsGrid />
      <ActivitiesCarousel />
      <GuideSection />
      <EmailSection />
    </>
  )
}
