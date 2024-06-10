import DestinationsGrid from "@/components/DestinationsGrid"
import Hero from "@/components/Hero";
import EmailSection from "@/components/EmailSection";
import VisaHelp from "@/components/VisaHelp";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsGrid />
      <ActivitiesCarousel />
      <VisaHelp />
      <EmailSection />
    </>
  )
}
