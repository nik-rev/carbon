import { useMDXComponent } from "next-contentlayer/hooks";
import { type FC } from "react";

import { MDXComponents } from "@/mdx-components";

type Props = {
  code: string;
};

const MDXContent: FC<Props> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={MDXComponents} />;
};

export default MDXContent;

const img = ({ src, alt, title }: React.HTMLProps<HTMLImageElement>) => (
  <figure className="kg-card flex size-fit flex-col" aria-label={alt}>
    <img src={src ?? ""} alt={alt} />
    {title && <figcaption className="text-center">{title}</figcaption>}
  </figure>
);

const p = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <div className="my-6" {...props} />
);

export const MDXComponents = { img, p };
