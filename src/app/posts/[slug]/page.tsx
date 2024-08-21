import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { type MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

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

const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="bg-red-500">{children}</h1>,
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
    <div>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <article className="prose">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
}

export default PostLayout;
