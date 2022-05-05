<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <dl>
    <dt class="sr-only">Name</dt>
    <dd>{{ frontmatter.author }}</dd>
    <dt v-if="frontmatter.twitter" class="sr-only">Twitter</dt>
    <dd v-if="frontmatter.twitter">
      <a
        :href="'https://twitter.com/' + frontmatter.twitter"
        target="_blank"
        rel="noopnener noreferrer"
        class="link"
        >{{ frontmatter.twitter }}</a
      >
    </dd>
  </dl>
</template>
