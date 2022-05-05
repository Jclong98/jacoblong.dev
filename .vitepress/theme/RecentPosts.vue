<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'

const recentPosts = posts.slice(0, 3)
</script>
<template>
  <div>
    <h2 class="text-2xl mt-8 mb-4">Recent Blog Posts</h2>

    <ul class="grid sm:grid-cols-3 gap-4">
      <li
        v-for="{ title, href, date, excerpt } of recentPosts"
        class="p-4 bg-white rounded-lg shadow-lg"
      >
        <article class="h-full flex flex-col justify-between">
          <div>
            <Date :date="date" />

            <h2 class="text-xl">
              <a :href="href">{{ title }}</a>
            </h2>

            <div v-if="excerpt" class="prose" v-html="excerpt"></div>
          </div>

          <a aria-label="read more" :href="href">Read more →</a>
        </article>
      </li>
    </ul>

    <div class="mt-4 mb-8">
      <a href="/posts"> View All Blog Posts →</a>
    </div>
  </div>
</template>
