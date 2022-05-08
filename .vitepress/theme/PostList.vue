<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>
<template>
  <div>
    <h1 class="text-5xl">Blog</h1>

    <ul>
      <li v-for="{ title, href, date, excerpt } of posts" class="card my-6">
        <article>
          <Date :date="date" />

          <div>
            <h2 class="text-4xl my-2">
              <a :href="href">{{ title }}</a>
            </h2>

            <div
              v-if="excerpt"
              class="prose dark:prose-invert"
              v-html="excerpt"
            ></div>
          </div>

          <div class="mt-2">
            <a aria-label="read more" :href="href">
              Read more
              <Icon icon="mdi:arrow-right" class="inline" />
            </a>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
