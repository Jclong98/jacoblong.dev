<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

import NavBar from './NavBar.vue'
import Article from './Article.vue'

const route = useRoute()
const isPost = computed(() => route.path.includes('/posts/'))
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 mb-4 dark:text-stone-300">
    <ClientOnly>
      <NavBar />
    </ClientOnly>

    <main>
      <div v-if="!isPost">
        <Content />
      </div>
      <Article v-else />
    </main>

    <footer class="opacity-65">
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        class="underline"
        >CC BY-NC-SA 4.0</a
      >
      2022-PRESENT © Jacob Long
    </footer>
  </div>
</template>
