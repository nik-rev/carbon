import { type Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

//
export function PostCard({ date, url, excerpt, title, readTime, tags }: Post) {
  return (
    <Link href={url}>
      <Card className="group">
        <CardHeader className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <span className="flex gap-x-2">
            {tags.map((tag) => (
              <Badge
                variant="outline"
                className="text-2xs w-max font-normal"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </span>
          <span className="block">
            <time dateTime={date} className="text-subtext0">
              {format(parseISO(date), "LLLL d, yyyy")}
            </time>
          </span>
        </CardHeader>
        <CardContent>{excerpt}</CardContent>
        <CardFooter className="flex justify-between">
          <span className="space-x-1 flex group-hover:text-green">
            <strong>Read more</strong>
            <ArrowRight className="animate-bounce opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="text-subtext1">{readTime} min read</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
