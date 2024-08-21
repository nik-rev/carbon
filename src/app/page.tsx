import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { PostCard } from "@/components/post-card";

export default function Home() {
  const posts = allPosts.toSorted((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
