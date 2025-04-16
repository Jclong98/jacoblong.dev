<script setup lang="ts">
const links = [
  // {
  //   name: "Blog",
  //   title: "Blog",
  //   to: "/posts",
  //   icon: "i-iconoir-book",
  //   showName: true,
  // },
  {
    name: "Projects",
    title: "Projects",
    to: "/projects",
    icon: "i-iconoir-code",
    showName: true,
  },
  // {
  //   name: 'About',
  //   title: 'About',
  //   href: '/about',
  //   icon: 'i-iconoir-info-empty',
  //   showName: true,
  // },
  {
    name: "Github",
    title: "Github",
    href: "https://github.com/jclong98",
    icon: "i-iconoir-github",
    showName: false,
  },
  // {
  //   name: 'Twitter',
  //   title: 'Twitter',
  //   href: 'https://twitter.com/jclong98',
  //   icon: 'i-iconoir-twitter',
  //   showName: false,
  // },
  {
    name: "Linkedin",
    title: "Linkedin",
    href: "https://www.linkedin.com/in/jacob-c-long/",
    icon: "i-iconoir-linkedin",
    showName: false,
  },
  {
    name: "Instagram",
    title: "Instagram",
    href: "https://www.instagram.com/jclong98/",
    icon: "i-iconoir-instagram",
    showName: false,
  },
];
</script>

<template>
  <nav class="flex justify-between my-6">
    <NuxtLink to="/" title="Home">
      <Logo class="w-[50px] h-50px" />
    </NuxtLink>

    <div class="flex gap-4">
      <ul class="flex gap-4 items-center">
        <li v-for="link in links" :key="link.name">
          <NuxtLink
            :href="link.href"
            :to="link.to"
            :title="link.title"
            class="text-xl"
          >
            <span
              class="hidden sm:inline"
              :class="{ 'sr-only': !link.showName }"
            >
              {{ link.name }}
            </span>
            <i :class="link.icon" class="ml-1"></i>
          </NuxtLink>
        </li>
      </ul>

      <DarkToggle />
    </div>
  </nav>
</template>
