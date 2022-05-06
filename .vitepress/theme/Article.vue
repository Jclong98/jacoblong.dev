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
    <header>
      <Date :date="date" />
      <h1 class="text-4xl mt-4">
        {{ data.title }}
      </h1>
    </header>

    <!-- <Author /> -->
    <Content
      class="prose dark:prose-invert max-w-none dark:prose-hr:border-stone-700"
    />

    <footer class="flex justify-between items-center mt-4 mb-8">
      <a href="/posts">
        <Icon icon="mdi:arrow-left" class="inline" />
        Back to the blog
      </a>

      <div class="flex justify-between items-center gap-4">
        <div
          v-if="prevPost"
          class="rounded-lg bg-gray-100 dark:bg-stone-900 p-4 shadow-lg"
        >
          <h2 class="text-gray-500 dark:text-stone-500">Previous Post</h2>
          <div class="text-xl">
            <a :href="prevPost.href">
              <Icon icon="mdi:arrow-left" class="inline" />
              {{ prevPost.title }}
            </a>
          </div>
        </div>

        <div
          v-if="nextPost"
          class="rounded-lg bg-gray-100 dark:bg-stone-900 p-4 shadow-lg"
        >
          <h2 class="text-gray-500 dark:text-stone-500">Next Post</h2>
          <div class="text-xl">
            <a :href="nextPost.href">
              {{ nextPost.title }}
              <Icon icon="mdi:arrow-right" class="inline" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>
