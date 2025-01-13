/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-psi-taupe-59.vercel.app",
        port: "",
        pathname: "/",
        search: "",
      },
    ],
  },
};

export default nextConfig;
