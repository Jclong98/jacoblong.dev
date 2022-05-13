<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>
<template>
  <div>
    <h1 class="text-5xl font-jetbrains-mono">Blog</h1>

    <ul>
      <li
        v-for="{ title, href, date, excerpt } of posts"
        class="my-6 rounded-lg border dark:border-stone-500"
      >
        <a :href="href">
          <article class="card grid">
            <Date :date="date" />

            <h2 class="text-3xl font-semibold">
              {{ title }}
            </h2>

            <p
              v-if="excerpt"
              class="prose dark:prose-invert"
              v-html="excerpt"
            ></p>
          </article>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
