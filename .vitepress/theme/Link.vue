<script setup>
defineProps({
  icon: {
    type: String,
    default: 'mdi:arrow-right',
  },
})
</script>

<template>
  <a class="group inline-flex items-center gap-1">
    <slot></slot>
    <Icon
      :icon="icon"
      class="inline group-hover:translate-x-2 transition duration-100"
    />
  </a>
</template>
