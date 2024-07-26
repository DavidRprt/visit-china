"use client"

import { FC, useEffect, useRef } from "react"
import Image from "next/image"
import BreadcrumbComponent from "@/components/Breadcrumb"
import { Mdx } from "@/components/destinations/MdxComponent"

interface ArticlePageProps {
  articleData: {
    id: string
    titulo: string
    fecha: string
    idioma: string
    imagen: string
    categoria: string
    intro: string
    body: {
      code: string
    }
  }
}

const ArticlePage: FC<ArticlePageProps> = ({ articleData }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const formattedDate = new Date(articleData.fecha).toLocaleDateString(
    articleData.idioma,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <section className="mb-8 md:mb-16 flex flex-col">
      <div className="max-w-full md:px-10 px-4 py-8">
        <div className="mb-4">
          <BreadcrumbComponent
            href="/articles"
            item="Articles"
            page={articleData.titulo}
          />
        </div>
        <div className="text-sm text-primary mb-2">
          {articleData.categoria.toLocaleUpperCase()}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          {articleData.titulo}
        </h1>
        <div className="text-gray-500 text-sm md:mb-6">
          Publicada el {formattedDate}
        </div>
      </div>

      <div className="relative w-full h-64 md:h-96 mb-8">
        <Image
          src={articleData.imagen}
          alt={articleData.titulo}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="max-w-full px-4 md:px-10 ">
        <p className="text-lg mb-8">{articleData.intro}</p>
        <div ref={contentRef} className="prose max-w-none">
          <Mdx code={articleData.body.code} />
        </div>
      </div>
    </section>
  )
}

export default ArticlePage
