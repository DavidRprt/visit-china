import Image from "next/image"

interface ResponsiveImageProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
}

interface ResponsiveImageProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
}

const ResponsiveImage = ({
  desktopSrc,
  mobileSrc,
  alt,
}: ResponsiveImageProps) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Desktop Image */}
      <div className="hidden md:block">
        <Image
          src={desktopSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {/* Mobile Image */}
      <div className="block md:hidden">
        <Image src={mobileSrc} alt={alt} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

interface DestinationProps {
  desktopImage: string
  mobileImage: string
  title: string
  subtitle: string
}

const Destination = ({
  desktopImage,
  mobileImage,
  title,
  subtitle,
}: DestinationProps) => {
  return (
    <div className="relative h-full w-full md:min-w-[1100px] lg:rounded-r-5xl 2xl:rounded-5xl overflow-hidden">
      <ResponsiveImage
        desktopSrc={desktopImage}
        mobileSrc={mobileImage}
        alt={title}
      />
      <div className="relative z-10 flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-primary p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden"></span>
        </div>
      </div>
    </div>
  )
}

const DestinationsCarousel = () => {
  return (
    <section className="relative flex flex-col py-10 lg:mb-10 lg:py-16 xl:mb-20 bg-white">
      <div className="padding-container max-container w-full pb-12">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary ">
          Destinations
        </p>
        <h2 className="bold-40 lg:bold-64">Discover the Wonders of China</h2>
      </div>

      <div className="hide-scrollbar flex h-[900px] flex-col md:flex-row w-full items-start justify-start md:gap-8 md:overflow-x-auto lg:h-[400px] xl:h-[640px] md:pr-3">
        <Destination
          desktopImage="/destination-1.jpg"
          mobileImage="/destination-1-mobile.jpeg"
          title="Great Wall of China"
          subtitle="A breathtaking historic wonder in Beijing"
        />
        <Destination
          desktopImage="/destination-2.jpg"
          mobileImage="/destination-2-mobile.jpg"
          title="Shanghai Skyline"
          subtitle="A stunning view of modern architecture"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-primary p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> and Exploring China?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of visitors when exploring a new
            destination in China, the possibility of getting lost is very high.
            That's why we are here for those of you who want to start an
            adventure in this vast and diverse country.
          </p>
          <Image
            src="/quote.svg"
            alt="quote symbol"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default DestinationsCarousel
