import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getArticles } from "@/lib/getContent"
import ArticleCard from "./ArticleCard"
import ViewAllButton from "./ViewAllButton"

const ArticleCarousel = () => {
  const articles = getArticles("es")

  return (
    <section className="padding-container mb-6">
      <div className="max-container w-full md:pb-16 mt-12 md:mt-24">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary">
          Discover China
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Our Latest News
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            quo dolore maxime magnam excepturi ex voluptas, ipsam dolorem itaque
            possimus dolor eaque nam fugit reiciendis, a quidem cum omnis
            quaerat?
          </p>
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="px-4 md:px-0">
          {articles.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <ArticleCard
                title={article.titulo}
                city={article.id}
                date={article.fecha}
                photo={article.imagen}
                id={article.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ViewAllButton url="/destinations" />
    </section>
  )
}

export default ArticleCarousel
