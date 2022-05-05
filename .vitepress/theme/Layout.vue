<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Article from './Article.vue'

const route = useRoute()
const isPost = computed(() => route.path.includes('/posts/'))

const links = [
  {
    name: 'Blog',
    title: 'Blog',
    href: '/posts',
    icon: 'mdi:notebook',
    showName: true,
  },
  // {
  //   name: 'About',
  //   title: 'About',
  //   href: '/about',
  //   icon: 'mdi:information',
  //   showName: true,
  // },
  {
    name: 'Github',
    title: 'Github',
    href: 'https://github.com/jclong98',
    icon: 'mdi:github',
    showName: false,
  },
  // {
  //   name: 'Twitter',
  //   title: 'Twitter',
  //   href: 'https://twitter.com/jclong98',
  //   icon: 'mdi:twitter',
  //   showName: false,
  // },
  {
    name: 'Linkedin',
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/jacob-c-long/',
    icon: 'mdi:linkedin',
    showName: false,
  },
  {
    name: 'Instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/jclong98/',
    icon: 'mdi:instagram',
    showName: false,
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-4">
    <header class="my-6">
      <nav class="flex justify-between">
        <a href="/" aria-label="Home">
          <img alt="logo" src="/favicon.svg" class="min-w-[50px]" />
        </a>

        <ul class="flex gap-4 items-center">
          <li v-for="link in links" :key="link.name" class="">
            <a :href="link.href" :title="link.title" class="text-xl">
              <span :class="{ 'sr-only': !link.showName }">
                {{ link.name }}
              </span>
              <Icon class="inline text-2xl ml-1" :icon="link.icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <div v-if="!isPost">
        <Content />
      </div>
      <Article v-else />
    </main>

    <footer>CC BY-NC-SA 4.0 2022-PRESENT © Jacob Long</footer>
  </div>
</template>
