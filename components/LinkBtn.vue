<script setup lang="ts">
withDefaults(defineProps<{ icon?: string }>(), {
  icon: "i-iconoir-arrow-right",
});
</script>

<template>
  <NuxtLink class="group inline-flex items-center gap-1">
    <slot></slot>
    <i
      v-if="icon"
      :class="icon"
      class="group-hover:translate-x-2 transition duration-100"
    ></i>
  </NuxtLink>
</template>
