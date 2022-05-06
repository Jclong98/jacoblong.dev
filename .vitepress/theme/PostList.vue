<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>
<template>
  <ul>
    <li
      v-for="{ title, href, date, excerpt } of posts"
      class="my-12 bg-white dark:bg-stone-800 p-4 rounded-lg shadow-lg"
    >
      <article>
        <Date :date="date" />

        <div>
          <div>
            <h2 class="text-4xl mb-4">
              <a :href="href">{{ title }}</a>
            </h2>

            <div
              v-if="excerpt"
              class="prose dark:prose-invert"
              v-html="excerpt"
            ></div>
          </div>

          <div>
            <a aria-label="read more" :href="href">Read more →</a>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
