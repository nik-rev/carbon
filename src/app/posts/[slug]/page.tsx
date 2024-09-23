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

        // <time dateTime={post.date}>
        //   {format(parseISO(post.date), "LLLL do, yyyy")}
        // </time>
function SectionBubble({ post }) {
  return (
    <div className="relative mb-[30vw] md:mb-[20vw] bg-mantle w-full flex justify-start">
      <span className="-mb-12 block bg-mantle max-sm:pt-20 pb-24 pt-32 md:pb-20 md:pt-28 max-w-prose mx-auto">
        <h1 className="scroll-m-20 bg-gradient-to-b from-text to-subtext1/80 bg-clip-text text-left text-4xl font-extrabold tracking-tight text-transparent lg:text-5xl mx-4 md:mx-8">
          {post.title}
        </h1>
      </span>

      {/* Custom Divider */}
      <div className="absolute bottom-0 h-[20vw] w-full translate-y-full bg-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1185 248"
          preserveAspectRatio="none"
          className="size-full"
        >
          <circle cx="76" cy="121.1" r="20" className="fill-mantle" />
          <circle cx="870" cy="201.1" r="11" className="fill-mantle" />
          <circle cx="814.5" cy="165.6" r="24.5" className="fill-mantle" />
          <path
            d="M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z"
            className="fill-mantle w-full"
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
      <article className="flex max-w-[100vw] flex-col max-md:px-4 sm:max-w-prose z-10">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
}

export default PostLayout;
