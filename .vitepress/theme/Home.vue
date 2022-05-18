<script setup>
import RecentPosts from './RecentPosts.vue'
import Link from './Link.vue'
</script>
<template>
  <div>
    <p class="leading-8">
      <span class="dark:text-amber-400"> Hi, my name is </span>
      <br />

      <span class="text-4xl font-bold">Jacob Long.</span>
      <br />

      <span class="text-4xl font-bold text-stone-600 dark:text-stone-400">
        I like to make websites 😀
      </span>
    </p>

    <p class="my-4">
      I'm a full-stack web developer with a passion for learning about all the
      neat new bits and bobs of modern web development.
    </p>

    <Link
      href="/projects"
      class="btn group btn px-8 text-center bg-amber-300 text-black font-semibold border dark:text-amber-400 dark:bg-transparents my-4"
    >
      See My Work
    </Link>

    <div class="prose dark:prose-invert">
      <p>
        Find my work on <a href="https://github.com/jclong98">GitHub</a> <br />
        Connect on
        <a href="https://www.linkedin.com/in/jacob-c-long/">LinkedIn</a> <br />
        Email me at <a href="mailto://jclong98@gmail.com">jclong98@gmail.com</a>
      </p>
    </div>

    <hr class="border-stone-300 dark:border-stone-700 my-4" />

    <RecentPosts />
  </div>
</template>
