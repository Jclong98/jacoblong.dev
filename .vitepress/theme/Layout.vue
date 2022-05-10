<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Article from './Article.vue'
import Brand from './Brand.vue'
import DarkToggle from './DarkToggle.vue'

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
  {
    name: 'Projects',
    title: 'Projects',
    href: '/projects',
    icon: 'mdi:code-braces',
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
  <div class="max-w-3xl mx-auto px-4 mb-4 dark:text-stone-300">
    <nav class="flex justify-between my-6">
      <a href="/" aria-label="Home">
        <Brand class="min-w-[50px]" />
      </a>

      <ul class="flex gap-4 items-center">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" :title="link.title" class="text-xl">
            <span :class="[{ 'sr-only': !link.showName }, 'hidden sm:inline']">
              {{ link.name }}
            </span>
            <Icon class="inline text-2xl ml-1" :icon="link.icon" />
          </a>
        </li>

        <li>
          <DarkToggle />
        </li>
      </ul>
    </nav>

    <main>
      <div v-if="!isPost">
        <Content />
      </div>
      <Article v-else />
    </main>

    <footer>
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY-NC-SA 4.0
      </a>
      2022-PRESENT © Jacob Long
    </footer>
  </div>
</template>
