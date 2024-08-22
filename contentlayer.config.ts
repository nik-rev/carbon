import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
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
    rehypePlugins: [rehypeSlug, rehypeHighlight],
  },
});
