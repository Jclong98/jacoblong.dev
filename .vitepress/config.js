import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jacob Long',
  description: "Jacob Long's personal website",
  head: [
    ['meta', { name: 'twitter:site', content: '@jclong98' }],
    [
      'meta',
      { name: 'twitter:card', content: 'https://jacoblong.dev/og_image.png' },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://jacoblong.dev/og_image.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-orange.png',
      },
    ],
    [
      'script',
      {
        src: '/setColorScheme.js',
      },
    ],
  ],
  vite: {
    build: {
      minify: 'terser',
    },
  },
})
