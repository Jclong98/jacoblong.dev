import { defineConfig } from 'vitepress'

const description = Jacob Long's personal website

export default defineConfig({
  title: 'Jacob Long',
  description: description,
  head: [
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

    // og:
    ['meta', { property: 'og:url', content: 'https://jacoblong.dev/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'jacoblong.dev' }],
    [
      'meta',
      { property: 'og:description', content: description },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://jacoblong.dev/og_image.png' },
    ],

    // twitter:
    ['meta', { name: 'twitter:site', content: '@jclong98' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:domain', content: 'jacoblong.dev' }],
    ['meta', { name: 'twitter:url', content: 'https://jacoblong.dev' }],
    ['meta', { name: 'twitter:title', content: 'jacoblong.dev' }],
    ['meta', { name: 'twitter:description', content: description }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://jacoblong.dev/og_image.png',
      },
    ],
  ],
  vite: {
    build: {
      minify: 'terser',
    },
  },
})
