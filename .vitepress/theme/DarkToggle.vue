<script setup>
defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    aria-label="Toggle Dark Mode"
    title="Toggle Dark Mode"
    class="text-xl"
  >
    <i :class="dark ? 'i-iconoir-sun-light' : 'i-iconoir-half-moon'"></i>
  </button>
</template>
