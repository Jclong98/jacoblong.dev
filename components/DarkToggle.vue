<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    aria-label="Toggle Dark Mode"
    :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    class="text-xl"
    type="button"
    role="switch"
    @click="toggleDark()"
  >
    <i class="i-iconoir-half-moon dark:i-iconoir-sun-light" />
  </button>
</template>
