import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFlexibleContainers from "remark-flexible-containers";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkFlexibleParagraphs from "remark-flexible-paragraphs";
import remarkGfm from "remark-gfm";
import remarkAdmonitions from "remark-github-beta-blockquote-admonitions";
import remarkHint from "remark-hint";
import remarkImages from "remark-images";
import remarkIns from "remark-ins";
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
      remarkA11yEmoji,
      // Add many <section> elements
      remarkSectionize,
      // ++example++ maps to <ins class="remark-ins">example<ins>
      remarkIns,
      // Support for bare image links, eg https://img.png will actually display the image
      remarkImages,
      remarkHint,
      // GitHub admonitions
      remarkAdmonitions,
      remarkFlexibleParagraphs,
      remarkFlexibleMarkers,
      [remarkFlexibleContainers, { containerTagName: "ruby" }],
    ],
    // @ts-expect-error -- No control over this
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-mocha",
          transformers: [transformerNotationDiff()],
        },
      ],
    ],
  },
});
