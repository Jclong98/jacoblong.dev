<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(() => queryContent(route.path).findOne());

const [previousPost, nextPost] = await queryContent()
  .only(["_path", "title"])
  .sort({ date: 1 })
  .findSurround(route.path);
</script>

<template>
  <article
    class="bg-white dark:bg-stone-900 p-4 rounded-lg mb-4 border dark:border-stone-500"
    v-if="data"
  >
    <Head>
      <Title>{{ data.title }}</Title>
    </Head>

    <ContentRenderer
      :value="data"
      class="bg-white dark:bg-stone-900 p-4 rounded-lg mb-4 border dark:border-stone-500"
    >
      <div>
        <header>
          <Date :value="data?.date" />

          <h1 class="text-4xl mt-4">
            {{ data?.title }}
          </h1>
        </header>

        <ContentRendererMarkdown
          :value="data?.body"
          class="prose dark:prose-invert max-w-none dark:prose-hr:border-stone-700"
        />
      </div>

      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>

    <!-- Footer -->
    <footer
      class="mt-4 mb-3 border-t border-stone-300 dark:border-stone-700 pt-4"
    >
      <div class="grid sm:grid-cols-2 gap-4">
        <!-- Previous Post -->
        <NuxtLink
          v-if="previousPost"
          :to="previousPost._path"
          class="btn border dark:border-stone-500"
        >
          <h2 class="text-stone-500 dark:text-stone-500">
            <i class="i-iconoir-arrow-left"></i>
            Previous Post
          </h2>
          <div class="text-xl">
            {{ previousPost.title }}
          </div>
        </NuxtLink>
        <div
          v-else
          class="flex items-center opacity-40 btn border dark:border-stone-500"
        >
          <p>No Previous Posts</p>
        </div>

        <!-- Next Post -->
        <NuxtLink
          v-if="nextPost"
          :to="nextPost._path"
          class="btn border dark:border-stone-500"
        >
          <h2 class="text-stone-500 dark:text-stone-500">
            Next Post
            <i class="i-iconoir-arrow-right"></i>
          </h2>
          <div class="text-xl">
            {{ nextPost.title }}
          </div>
        </NuxtLink>
        <div
          v-else
          class="flex items-center opacity-40 btn border dark:border-stone-500"
        >
          <p>Check back later for more content 🙂</p>
        </div>

        <!-- Back to blog button -->
        <NuxtLink
          to="/posts"
          class="btn sm:col-span-2 border dark:border-stone-500"
        >
          <i class="i-iconoir-arrow-left"></i>
          Back to the blog
        </NuxtLink>
      </div>
    </footer>
  </article>
</template>
