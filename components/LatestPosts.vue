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
        v-for="{ title, _path, date, excerpt } in recentPosts"
        class="card border border-current dark:border-stone-500 flex flex-col justify-between"
      >
        <div>
          <header>
            <Date :value="date" />

            <h2 class="text-xl">
              <NuxtLink :to="_path">{{ title }}</NuxtLink>
            </h2>
          </header>

          <ContentRendererMarkdown
            class="prose dark:prose-invert"
            v-if="excerpt"
            :value="excerpt"
          />
        </div>

        <LinkBtn :to="_path">Read More</LinkBtn>
      </li>
    </ul>

    <div class="mt-4 mb-8">
      <LinkBtn to="/posts">View All Blog Posts</LinkBtn>
    </div>
  </div>
</template>
