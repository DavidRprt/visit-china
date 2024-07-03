import { useEffect, useState } from "react"
import Image from "next/image"

interface HeroSectionProps {
  photo: string
  title: string
  intro: string
  onMoreInfoClick: () => void
}

const HeroSection = ({
  photo,
  title,
  intro,
  onMoreInfoClick,
}: HeroSectionProps) => {
  const [heroHeight, setHeroHeight] = useState("100vh")

  useEffect(() => {
    const handleResize = () => {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
      setHeroHeight(`calc(100vh - ${navbarHeight}px)`)
    }

    // Initial calculation
    handleResize()
    // Recalculate on window resize
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full mb-8" style={{ height: heroHeight }}>
      <Image
        src={photo}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center px-1 md:px-0">
        <h1 className="text-4xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="md:text-2xl text-lg mb-6 text-white font-semibold drop-shadow-lg">
          {intro}
        </p>
        <button
          className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 flex items-center drop-shadow-lg"
          onClick={onMoreInfoClick}
        >
          More Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
