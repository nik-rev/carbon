import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";
import prettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";
import { transformerNotationDiff } from "shikiji-transformers";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    toc: {
      type: "boolean",
      required: false,
      default: false,
    },
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
    headings: {
      type: "json",
      resolve: (doc) => {
        const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/gv;
        const slugger = new GithubSlugger();
        return [...doc.body.raw.matchAll(headingsRegex)].map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level:
              flag?.length === 1 ? "one" : flag?.length === 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : null,
          };
        });
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      // wrap emojis in spans with aria-label description
      remarkA11yEmoji,
      // Add many <section> elements
      remarkSectionize,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        // @ts-expect-error -- No control over this
        prettyCode,
        {
          theme: "catppuccin-mocha",
          transformers: [transformerNotationDiff()],
        },
      ],
    ],
  },
});
