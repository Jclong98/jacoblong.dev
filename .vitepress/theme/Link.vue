<script setup>
defineProps({
  icon: {
    type: String,
    default: 'i-iconoir-arrow-right',
  },
})
</script>

<template>
  <a class="group inline-flex items-center gap-1">
    <slot></slot>
    <i
      :class="icon"
      class="group-hover:translate-x-2 transition duration-100"
    ></i>
  </a>
</template>
