import Activities from "@/components/Activities";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import EmailSection from "@/components/EmailSection";
import VisaHelp from "@/components/VisaHelp";

export default function Home() {
  return (
    <>
      <DestinationsCarousel />
      <Activities />
      <VisaHelp />
      <EmailSection />
    </>
  );
}
