<script setup>
import Date from './Date.vue'
import Link from './Link.vue'
import { data as posts } from '../posts.data'

const recentPosts = posts.slice(0, 3)
</script>
<template>
  <div>
    <h2 class="text-2xl mb-4 font-jetbrains-mono">Recent Blog Posts</h2>

    <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <li
        v-for="{ title, href, date, excerpt } of recentPosts"
        class="card border dark:border-stone-500"
      >
        <article class="h-full flex flex-col justify-between">
          <div>
            <Date :date="date" />

            <h2 class="text-xl">
              <a :href="href">{{ title }}</a>
            </h2>

            <div
              v-if="excerpt"
              class="prose dark:prose-invert"
              v-html="excerpt"
            ></div>
          </div>

          <Link :href="href">Read More</Link>
        </article>
      </li>
    </ul>

    <div class="mt-4 mb-8">
      <Link href="/posts">View All Blog Posts</Link>
    </div>
  </div>
</template>
