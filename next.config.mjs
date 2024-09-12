import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { dirs: ['src'] },
  experimental: {
    reactMode: false,
    serverActions: true,
  },

  images: {
    domains: ['cdn.dummyjson.com'],
  },

  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i

    const reactServerDomWebpackPath = path.join(
      __dirname,
      'node_modules',
      'next',
      'dist',
      'compiled',
      'react-server-dom-webpack',
    )

    config.resolve.alias['react-server-dom-webpack'] = reactServerDomWebpackPath
    config.resolve.alias['react-server-dom-webpack/client'] = path.join(
      reactServerDomWebpackPath,
      'client.edge.js',
    )
    config.resolve.alias['react-server-dom-webpack/client.edge'] = path.join(
      reactServerDomWebpackPath,
      'client.edge.js',
    )
    config.resolve.alias['react-server-dom-webpack/server'] = path.join(
      reactServerDomWebpackPath,
      'server.edge.js',
    )
    config.resolve.alias['react-server-dom-webpack/server.edge'] = path.join(
      reactServerDomWebpackPath,
      'server.edge.js',
    )

    return config
  },
}

export default nextConfig
