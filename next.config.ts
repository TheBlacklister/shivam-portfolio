import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tree-shake per-icon/per-export instead of pulling whole barrels into the
  // client bundle. lucide-react especially — a barrel import of it costs far
  // more than the handful of icons actually used.
  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "motion/react"],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      // /_next/static is already served immutable by Next — overriding it
      // triggers a build warning and can break dev, so it is left alone.
      {
        source: "/logos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
      {
        source: "/:file(.*\\.pdf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/demos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
