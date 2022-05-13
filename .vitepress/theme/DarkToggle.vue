<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    aria-label="Toggle Dark Mode"
    title="Toggle Dark Mode"
    class="text-xl"
  >
    <i :class="isDark ? 'i-iconoir-sun-light' : 'i-iconoir-half-moon'"></i>
  </button>
</template>
