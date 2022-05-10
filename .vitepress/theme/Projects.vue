<script setup>
const projects = [
  {
    title: 'Bird Avatar Generator',
    image:
      'https://camo.githubusercontent.com/551125749962fedaf6ac7082be8bdd31add122aec243335990aca887a7c2ee1d/68747470733a2f2f692e696d6775722e636f6d2f426a65314736522e706e67',
    imageAlt: 'Screenshot of the bird avatar generator',
    description:
      'A fun bird generator loosely based on the bird designs of Kurzgesagt made with Vue 3, Nuxt 3, UnoCSS, and TypeScript',
    liveDemo: 'https://bird-avatars.jacoblong.dev',
    source: 'https://github.com/Jclong98/bird-avatars',
  },
  {
    title: 'Noita Helper (WIP)',
    image: 'https://i.imgur.com/5UPSNZU.png',
    imageAlt: 'Screenshot of the bird avatar generator',
    description:
      'A small, more focused wiki for the game Noita based on the in-game progress screen',
    liveDemo: 'https://noita-helper.jacoblong.dev',
  },
  {
    title: 'jacoblong.dev',
    image: 'https://jacoblong.dev/og_image.png',
    imageAlt: 'My personal logo',
    description: 'My personal website made with VitePress, Vue 3, and UnoCSS',
    liveDemo: 'https://jacoblong.dev',
    source: 'https://github.com/Jclong98/jacoblong.dev',
  },
  {
    title: 'Todo React',
    image:
      'https://camo.githubusercontent.com/987fb540fb4dc43a8851fe442e8b0aebbcdde821c01f11fcf91872fc6ca26fad/68747470733a2f2f692e696d6775722e636f6d2f713866554233782e706e67',
    imageAlt: 'Screenshot of the Todo React Application',
    description:
      'Solution to the Frontend Mentor Todo Challenge. A todo list made with Vite, React, usehooks-ts, react-sortablejs, and TypeScript. I made this to learn React. Saves todo items to local storage.',
    liveDemo: 'https://gleaming-alpaca-bd8b47.netlify.app/',
    source: 'https://github.com/jclong98/todo-react',
  },
  {
    title: 'Todo Vue',
    image:
      'https://camo.githubusercontent.com/987fb540fb4dc43a8851fe442e8b0aebbcdde821c01f11fcf91872fc6ca26fad/68747470733a2f2f692e696d6775722e636f6d2f713866554233782e706e67',
    imageAlt: 'Screenshot of the Todo Vue Application',
    description:
      'Solution to the Frontend Mentor Todo Challenge. A todo list made with Vite, Vue 3, VueUse, VueDraggable, and TypeScript. I made this as a comparison to the Todo-React project. They behave exactly the same. Saves todo items to local storage.',
    liveDemo: 'https://dreamy-bavarois-f624c2.netlify.app/',
    source: 'https://github.com/jclong98/todo-vue',
  },
]
</script>
<template>
  <div>
    <h1 class="text-5xl">Projects</h1>

    <article
      v-for="(project, index) in projects"
      :key="project.title"
      class="card my-8 flex flex-col gap-4 justify-between sm:flex-row mt-14 md:mt-8"
      :class="{ 'sm:flex-row-reverse': index % 2 === 0 }"
    >
      <!-- Image -->
      <a
        :href="project.liveDemo"
        class="rounded-lg sm:w-[300px] sm:h-[200px] shadow-lg -translate-y-12 -mb-8 sm:mb-0"
        :class="[index % 2 === 0 ? 'md:translate-x-12' : 'md:-translate-x-12']"
      >
        <img
          :src="project.image"
          :alt="project.imageAlt"
          class="object-cover rounded-lg sm:h-[200px] sm:w-[300px]"
        />
      </a>

      <!-- Text & actions -->
      <div class="flex flex-col justify-between grow sm:max-w-[400px]">
        <!-- title and description -->
        <div class="grid gap-2">
          <h2 class="text-3xl">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>

        <!-- actions -->
        <div class="grid sm:grid-cols-2 gap-4 mt-6">
          <!-- Source -->
          <a
            v-if="project.source"
            :href="project.source"
            aria-label="Source"
            class="btn px-8 text-center dark:bg-stone-800"
          >
            Source
            <Icon icon="mdi:code-braces" class="inline" />
          </a>

          <!-- Live Demo -->
          <a
            v-if="project.liveDemo"
            :href="project.liveDemo"
            aria-label="Live Demo"
            class="text-center rounded-lg bg-amber-300 dark:bg-amber-400 text-black font-semibold p-4 shadow-lg px-8"
          >
            Live Demo
            <Icon icon="mdi:open-in-new" class="inline" />
          </a>
        </div>
      </div>
    </article>
  </div>
</template>
