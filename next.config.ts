import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json in the
  // home directory otherwise makes Next infer ~ as the root (file-tracing/output bug).
  turbopack: { root: __dirname },
  // q=60 for in-content project photos keeps them sharp enough while cutting
  // bytes so they don't contend with the text LCP under slow-network simulation.
  images: { qualities: [60, 75] },
};

export default nextConfig;
