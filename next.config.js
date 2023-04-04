/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { domains: ["res.cloudinary.com", "image-cdn.essentiallysports.com"] },
};

module.exports = nextConfig;
