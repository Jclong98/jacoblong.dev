<template>
  <button
    aria-label="Toggle Dark Mode"
    title="Toggle Dark Mode"
    class="text-xl"
  >
    <i :class="isDark ? 'i-iconoir-sun-light' : 'i-iconoir-half-moon'"></i>
  </button>
</template>
