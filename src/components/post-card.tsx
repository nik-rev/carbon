import { type Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export function PostCard({ date, url, excerpt, title }: Post) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={date}>{format(parseISO(date), "LLLL d, yyyy")}</time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6">
          <Link className="link" href={url}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6">{excerpt}</p>
      </div>
    </article>
  );
}
