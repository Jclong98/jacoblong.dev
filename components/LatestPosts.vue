<script lang="ts" setup>
const { data: recentPosts } = useAsyncData(() =>
  queryContent()
    .sort({ date: -1 })
    .only(["date", "title", "_path", "excerpt"])
    .find()
);
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4 font-jetbrains-mono">Recent Blog Posts</h2>

    <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <li
        v-for="{ title, href, date, excerpt } in recentPosts"
        class="card border dark:border-stone-500"
      >
        <article class="h-full flex flex-col justify-between">
          <div>
            <Date :value="date" />

            <h2 class="text-xl">
              <a :href="href">{{ title }}</a>
            </h2>

            <ContentRendererMarkdown
              class="prose dark:prose-invert"
              v-if="excerpt"
              :value="excerpt"
            />
          </div>

          <LinkBtn :href="href">Read More</LinkBtn>
        </article>
      </li>
    </ul>

    <div class="mt-4 mb-8">
      <LinkBtn href="/posts">View All Blog Posts</LinkBtn>
    </div>
  </div>
</template>
