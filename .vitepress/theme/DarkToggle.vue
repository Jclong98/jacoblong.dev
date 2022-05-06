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
  >
    <Icon
      :icon="isDark ? 'mdi:brightness-7' : 'mdi:moon-waning-crescent'"
      class="inline text-2xl ml-1 -rotate-45"
    />
  </button>
</template>
