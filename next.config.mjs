import createMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({ extension: /\.mdx?$/v });

export default withContentlayer(withMDX(nextConfig));
