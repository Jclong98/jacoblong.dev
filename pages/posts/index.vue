<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/posts")
    .only(["date", "title", "excerpt", "_path"])
    .sort({ date: -1 })
    .find()
);

useSeoMeta({ title: "Blog" });
</script>

<template>
  <div class="mx-4">
    <h1 class="text-5xl font-jetbrains-mono">Blog</h1>

    <ul>
      <li
        v-for="{ title, _path, date, excerpt } of posts"
        class="my-6 rounded-lg border dark:border-stone-500"
      >
        <NuxtLink :to="_path" class="card grid">
          <Date :value="date" />

          <h2 class="text-3xl font-semibold">
            {{ title }}
          </h2>

          <ContentRendererMarkdown
            class="prose dark:prose-invert"
            v-if="excerpt"
            :value="excerpt"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
