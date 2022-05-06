<script setup>
import Date from './Date.vue'
import Author from './Author.vue'
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as posts } from '../posts.data'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
  return posts.findIndex((p) => p.href === route.path)
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
  <article class="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-xl mb-4">
    <header class="mb-8">
      <Date :date="date" />
      <h1 class="text-4xl">
        {{ data.title }}
      </h1>
    </header>

    <!-- <Author /> -->
    <Content
      class="prose dark:prose-invert max-w-none dark:prose-hr:border-stone-700"
    />

    <footer class="flex justify-between items-center mt-4 mb-8">
      <a href="/posts">← Back to the blog</a>

      <div class="flex justify-between items-center gap-4">
        <div v-if="prevPost" class="rounded-lg border border-stone-500 p-2">
          <h2 class="text-stone-500">Previous Article</h2>
          <div class="text-xl">
            <a :href="prevPost.href">← {{ prevPost.title }}</a>
          </div>
        </div>

        <div v-if="nextPost" class="rounded-lg border border-stone-500 p-2">
          <h2 class="text-stone-500">Next Article</h2>
          <div class="text-xl">
            <a :href="nextPost.href">{{ nextPost.title }} →</a>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>
