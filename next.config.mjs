/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {unoptimized: true},
    experimental: {images: {unoptimized: true}},
    basePath: ""
};

export default nextConfig;
