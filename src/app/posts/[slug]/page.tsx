import { allPosts } from "contentlayer/generated";
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
    <div className="flex flex-col items-center">
      {/* <h1 className="col-span-full">{post.title}</h1> */}
      {/* <time dateTime={post.date}> */}
      {/*   {format(parseISO(post.date), "LLLL d, yyyy")} */}
      {/* </time> */}
      <article className="flex max-w-[100vw] flex-col max-md:px-4 sm:max-w-prose">
        <MDXContent components={mdxComponents} />
      </article>
      {/* <article className="col-start-2 col-end-2 row-start-3"> */}
      {/* </article> */}
    </div>
  );
}

export default PostLayout;
