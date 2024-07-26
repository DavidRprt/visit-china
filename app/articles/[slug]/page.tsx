import { FC } from "react"
import { allArticles } from "contentlayer/generated"
import { notFound } from "next/navigation"
import ArticlePage from "@/components/articles/ArticlePage"

interface PageProps {
  params: {
    slug: string
  }
}

async function getArticleFromParams(slug: string) {
  const article = allArticles.find((article) => article.id === slug)

  if (!article) {
    notFound()
  }

  return article
}

const Page: FC<PageProps> = async ({ params }) => {
  const article = await getArticleFromParams(params.slug)

  return <ArticlePage articleData={article} />
}

export default Page
