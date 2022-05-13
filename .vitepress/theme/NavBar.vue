<script setup>
import { useDark, useToggle } from '@vueuse/core'

import DarkToggle from './DarkToggle.vue'
import Logo from './Logo.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const links = [
  {
    name: 'Blog',
    title: 'Blog',
    href: '/posts',
    icon: 'i-iconoir-book',
    showName: true,
  },
  {
    name: 'Projects',
    title: 'Projects',
    href: '/projects',
    icon: 'i-iconoir-code',
    showName: true,
  },
  // {
  //   name: 'About',
  //   title: 'About',
  //   href: '/about',
  //   icon: 'i-iconoir-information',
  //   showName: true,
  // },
  {
    name: 'Github',
    title: 'Github',
    href: 'https://github.com/jclong98',
    icon: 'i-iconoir-github',
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
    name: 'Linkedin',
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/jacob-c-long/',
    icon: 'i-iconoir-linkedin',
    showName: false,
  },
  {
    name: 'Instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/jclong98/',
    icon: 'i-iconoir-instagram',
    showName: false,
  },
]
</script>

<template>
  <nav class="flex justify-between my-6">
    <a href="/" aria-label="Home">
      <Logo class="w-[50px] h-50px" :dark="isDark" />
    </a>

    <ul class="flex gap-4 items-center">
      <li v-for="link in links" :key="link.name">
        <a :href="link.href" :title="link.title" class="text-xl">
          <span :class="[{ 'sr-only': !link.showName }, 'hidden sm:inline']">
            {{ link.name }}
          </span>
          <i :class="link.icon" class="ml-1"></i>
        </a>
      </li>

      <li>
        <DarkToggle @click="toggleDark()" :dark="isDark" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
