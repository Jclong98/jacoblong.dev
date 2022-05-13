<script setup>
import Date from './Date.vue'
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
  <article
    class="bg-white dark:bg-stone-900 p-4 rounded-lg mb-4 border dark:border-stone-500"
  >
    <header>
      <Date :date="date" />
      <h1 class="text-4xl mt-4">
        {{ data.title }}
      </h1>
    </header>

    <Content
      class="prose dark:prose-invert max-w-none dark:prose-hr:border-stone-700"
    />

    <!-- Footer -->
    <footer
      class="mt-4 mb-3 border-t border-stone-300 dark:border-stone-700 pt-4"
    >
      <div class="grid sm:grid-cols-2 gap-4">
        <!-- Previous Post -->
        <a
          v-if="prevPost"
          :href="prevPost.href"
          class="btn border dark:border-stone-500"
        >
          <h2 class="text-stone-500 dark:text-stone-500">
            <i class="i-iconoir-arrow-left"></i>
            Previous Post
          </h2>
          <div class="text-xl">
            {{ prevPost.title }}
          </div>
        </a>
        <div
          v-else
          class="flex items-center opacity-40 btn border dark:border-stone-500"
        >
          <p>No Previous Posts</p>
        </div>

        <!-- Next Post -->
        <a
          v-if="nextPost"
          :href="nextPost.href"
          class="btn border dark:border-stone-500"
        >
          <h2 class="text-stone-500 dark:text-stone-500">
            Next Post
            <i class="i-iconoir-arrow-right"></i>
          </h2>
          <div class="text-xl">
            {{ nextPost.title }}
          </div>
        </a>
        <div
          v-else
          class="flex items-center opacity-40 btn border dark:border-stone-500"
        >
          <p>Check back later for more content 🙂</p>
        </div>

        <!-- Back to blog button -->
        <a href="/posts" class="btn sm:col-span-2 border dark:border-stone-500">
          <i class="i-iconoir-arrow-left"></i>
          Back to the blog
        </a>
      </div>
    </footer>
  </article>
</template>
