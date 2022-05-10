<script setup>
import RecentPosts from './RecentPosts.vue'
</script>
<template>
  <div class="grid gap-4">
    <div class="text-2xl my-6">
      <p>
        Hi, I'm Jacob Long.
        <br />
        I like to make websites 😀
        <br />
      </p>
    </div>

    <div>
      <a
        href="/projects"
        class="btn group btn px-8 text-center bg-amber-300 text-black font-semibold dark:border dark:text-amber-400 dark:bg-transparent"
      >
        See My Work
        <Icon icon="mdi:arrow-right" class="inline" />
      </a>
    </div>

    <div class="prose dark:prose-invert">
      <p>
        Find my work on <a href="https://github.com/jclong98">GitHub</a> <br />
        Connect on
        <a href="https://www.linkedin.com/in/jacob-c-long/">LinkedIn</a> <br />
        Email me at <a href="mailto://jclong98@gmail.com">jclong98@gmail.com</a>
      </p>
    </div>

    <hr class="border-stone-300 dark:border-stone-700" />

    <RecentPosts />
  </div>
</template>
