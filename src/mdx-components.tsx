import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="bg-red-200 text-lg">{children}</h1>,
    ...components,
  };
}
