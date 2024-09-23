import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "@/components/mdx/init";
import { Spotlight } from "@/components/ui/spotlight";

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

function SectionBubble({ post }) {
  return (
    <div className="relative flex w-full flex-col justify-start">
      <span className="flex w-full flex-col justify-center bg-mantle items-center gap-12">
        <h1 className="max-w-[656.5px] scroll-m-20 bg-gradient-to-b m-8 from-text to-subtext1 bg-clip-text pt-10 text-left text-4xl font-extrabold tracking-tight text-transparent lg:py-16 lg:text-5xl">
          {post.title}
        </h1>
        <time dateTime={post.date} className="text-subtext0 mb-8">
          {format(parseISO(post.date), "LLLL do, yyyy")}
        </time>
      </span>

      {/* Custom Divider */}
      <div className="mb-8 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          className="block h-[100px] max-h-[10vw] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-mantle"
          />
        </svg>
      </div>
    </div>
  );
}

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
      <SectionBubble post={post} />
      <article className="z-10 flex max-w-[100vw] flex-col max-md:px-4 sm:max-w-prose">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
}

export default PostLayout;
