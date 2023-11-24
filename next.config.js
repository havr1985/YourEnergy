/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        port: '',
        
      },
    ],
  },
}
