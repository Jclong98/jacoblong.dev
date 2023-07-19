<script setup lang="ts">
const props = defineProps<{ value: string }>();

const formattedDateTime = useDateFormat(() => props.value, "MMM D, YYYY");
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd
      class="text-base leading-6 font-medium text-stone-500 dark:text-stone-500"
    >
      <time :datetime="props.value"> {{ formattedDateTime }} </time>
    </dd>
  </dl>
</template>
