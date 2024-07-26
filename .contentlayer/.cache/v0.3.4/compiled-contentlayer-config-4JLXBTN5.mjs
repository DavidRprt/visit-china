// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "guides/**/*.mdx",
  contentType: "mdx",
  fields: {
    id: { type: "string", required: true },
    name: { type: "string", required: true },
    intro: { type: "string", required: true },
    location: { type: "string", required: true },
    language: { type: "string", required: true },
    image: { type: "string", required: true }
  },
  computedFields
}));
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/**/*.mdx",
  contentType: "mdx",
  fields: {
    id: { type: "string", required: true },
    titulo: { type: "string", required: true },
    fecha: { type: "string", required: true },
    idioma: { type: "string", required: true },
    imagen: { type: "string", required: true },
    categoria: { type: "string", required: true },
    intro: { type: "string", required: true }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Guide, Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Article,
  Guide,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4JLXBTN5.mjs.map
