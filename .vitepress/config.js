import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jacob Long',
  description: "Jacob Long's personal website",
  head: [
    ['meta', { name: 'twitter:site', content: '@jclong98' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: '/og_image.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg',
        href: '/favicon.svg',
      },
    ],
  ],
  vite: {
    build: {
      minify: 'terser',
    },
  },
})
