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
  <article class="bg-white dark:bg-black rounded-lg shadow-xl mb-4">
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
      class="mt-4 mb-3 border-t border-gray-300 dark:border-stone-700 pt-4"
    >
      <div class="grid sm:grid-cols-2 gap-4">
        <!-- Previous Post -->
        <a v-if="prevPost" :href="prevPost.href" class="btn">
          <h2 class="text-gray-500 dark:text-stone-500">
            <Icon icon="mdi:arrow-left" class="inline" />
            Previous Post
          </h2>
          <div class="text-xl">
            {{ prevPost.title }}
          </div>
        </a>
        <div v-else class="flex items-center opacity-40 btn">
          <p>No Previous Posts</p>
        </div>

        <!-- Next Post -->
        <a v-if="nextPost" :href="nextPost.href" class="btn">
          <h2 class="text-gray-500 dark:text-stone-500">
            Next Post
            <Icon icon="mdi:arrow-right" class="inline" />
          </h2>
          <div class="text-xl">
            {{ nextPost.title }}
          </div>
        </a>
        <div v-else class="flex items-center opacity-40 btn">
          <p>Check back later for more content 🙂</p>
        </div>

        <!-- Back to blog button -->
        <a href="/posts" class="btn sm:col-span-2">
          <Icon icon="mdi:arrow-left" class="inline" />
          Back to the blog
        </a>
      </div>
    </footer>
  </article>
</template>
