import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/blog",
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
