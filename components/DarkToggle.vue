<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 * also [@antfu](https://github.com/antfu)
 */
const onClick = (event: MouseEvent) => {
  // @ts-expect-error
  const isAppearanceTransition = document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isAppearanceTransition) return toggleDark();

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDark();
    await nextTick();
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    // beam
    // const clipPath = [
    //   `polygon(49% 0%, 51% 0, 51% 0, 49% 0)`,
    //   `polygon(49% 0%, 51% 0, 51% 100%, 49% 100%)`,
    //   `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
    // ]

    // wipe
    // const clipPath = [
    //   ` polygon(0 0, 100% 0, 0 0, 0% 100%)`,
    //   ` polygon(0 0, 100% 0, 0 100%, 0% 100%)`,
    //   ` polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
    // ]

    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: isDark.value
          ? "::view-transition-old(root)"
          : "::view-transition-new(root)",
      }
    );
  });
};
</script>

<template>
  <button
    aria-label="Toggle Dark Mode"
    :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    class="text-xl"
    type="button"
    role="switch"
    @click="onClick"
  >
    <i class="i-iconoir-half-moon dark:i-iconoir-sun-light" />
  </button>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
