/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('./scripts/remark-static-props')],
    rehypePlugins: []
  }
})
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})
