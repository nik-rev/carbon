import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { s } from "hastscript";
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from "rehype-autolink-headings";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: "string",
      resolve: (post) => {
        const WORDS_PER_MINUTE = 200;
        const numberOfWords = post.body.raw.split(/\s/v).length;
        return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
