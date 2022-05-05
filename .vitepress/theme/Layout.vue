<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <header class="my-6">
      <nav class="flex justify-between">
        <a href="/" aria-label="Home">
          <img alt="logo" src="/favicon.svg" />
        </a>

        <ul class="flex gap-4 items-center">
          <li><a href="/posts">Blog</a></li>
          <li><a href="https://github.com/jclong98">GitHub</a></li>
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

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Article from './Article.vue'

const route = useRoute()
const isPost = computed(() => route.path.includes('/posts/'))
</script>
