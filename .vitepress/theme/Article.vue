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
  <article>
    <header>
      <Date :date="date" />
      <h1 class="text-4xl">
        {{ data.title }}
      </h1>
    </header>

    <!-- <Author /> -->
    <Content class="prose max-w-none" />

    <footer class="flex justify-between items-center mt-4 mb-8">
      <a href="/blog">← Back to the blog</a>

      <div class="flex justify-between items-center gap-4">
        <div v-if="prevPost" class="border p-2">
          <h2 class="text-gray-500">Previous Article</h2>
          <div class="text-xl">
            <a :href="prevPost.href">← {{ prevPost.title }}</a>
          </div>
        </div>

        <div v-if="nextPost" class="border p-2">
          <h2 class="text-gray-500">Next Article</h2>
          <div class="text-xl">
            <a :href="nextPost.href">{{ nextPost.title }} →</a>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>
