import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "@/components/mdx/init";

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (mdxPost) => mdxPost._raw.flattenedPath === params.slug,
  );

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const { title } = post;

  return {
    title,
  };
};

function PostLayout({ params }: { readonly params: { slug: string } }) {
  const post = allPosts.find(
    (mdxPost) => mdxPost._raw.flattenedPath === params.slug,
  );

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="grid grid-cols-[1fr_65ch_1fr] grid-rows-[2rem_2rem_1fr] flex-col items-center">
      <h1 className="col-span-full">{post.title}</h1>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <article className="col-start-2 col-end-2 row-start-3">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
}

export default PostLayout;
