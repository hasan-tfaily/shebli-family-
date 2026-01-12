import type { NextConfig } from "next";

// Get Strapi URL from environment, parse hostname and port
const strapiUrl = process.env.STRAPI_BASE_URL || "http://46.62.246.5:1337";
let strapiHostname = "46.62.246.5";
let strapiPort = "1337";
let strapiProtocol: "http" | "https" = "http";

try {
  const url = new URL(strapiUrl);
  strapiHostname = url.hostname;
  strapiPort = url.port || (url.protocol === "https:" ? "443" : "80");
  strapiProtocol = url.protocol === "https:" ? "https" : "http";
} catch {
  // Use defaults if URL parsing fails
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: strapiProtocol,
        hostname: strapiHostname,
        port: strapiPort,
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
