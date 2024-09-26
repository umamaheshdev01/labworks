/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
        protocol: 'https',
        hostname: 'images.bewakoof.com'
        },
        
        {
            protocol: 'https',
            hostname: 'www.bewakoof.com'
        },
    ]}
};

export default nextConfig;
