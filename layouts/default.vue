<script lang="ts" setup>
useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-orange.png",
    },
  ],
});

useSeoMeta({
  titleTemplate: "%s | jacoblong.dev",

  // og
  ogUrl: "https://jacoblong.dev",
  ogTitle: "jacoblong.dev",
  ogDescription:
    "Jacob Long is a web developer based in Arizona who loves to learn about and make websites. Contact him for your next project!",
  ogImage: "https://jacoblong.dev/og_image.png",

  // twitter
  twitterSite: "@jclong98",
  twitterCard: "summary_large_image",
  twitterImage: "https://jacoblong.dev/og_image.png",
  twitterTitle: "jacoblong.dev",
});
</script>

<template>
  <div class="max-w-3xl mx-auto mb-4 dark:text-stone-300">
    <NavBar class="mx-4" />

    <main>
      <slot />
    </main>

    <footer class="opacity-65 mx-4">
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        class="underline"
        >CC BY-NC-SA 4.0</a
      >

      2022-PRESENT © Jacob Long
    </footer>
  </div>
</template>

<style>
html {
  @apply bg-gray-100 transition duration-200 ease-in-out;
}

html.dark {
  @apply bg-black;
  color-scheme: dark;
}
</style>
