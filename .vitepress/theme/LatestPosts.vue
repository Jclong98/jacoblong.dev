<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'

const latestPosts = posts.slice(0, 3)
</script>
<template>
  <div>
    <ul class="grid sm:grid-cols-3 gap-4 mt-8 grow">
      <li
        v-for="{ title, href, date, excerpt } of latestPosts"
        class="border p-4"
      >
        <article class="h-full flex flex-col justify-between">
          <div class="">
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
