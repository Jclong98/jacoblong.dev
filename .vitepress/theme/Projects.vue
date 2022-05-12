<script setup>
import { ref, computed } from 'vue'

const projects = [
  {
    title: 'Bird Avatar Generator',
    image: '/card-bird-avatar.png',
    imageAlt: 'Screenshot of the bird avatar generator',
    description:
      'A fun bird generator loosely based on the bird designs of Kurzgesagt made with Vue 3, Nuxt 3, UnoCSS, and TypeScript. Testing done with Vitest.',
    liveDemo: 'https://bird-avatars.jacoblong.dev',
    source: 'https://github.com/Jclong98/bird-avatars',
    tags: ['Vue 3', 'Nuxt 3', 'UnoCSS', 'TypeScript'],
  },
  {
    title: 'Noita Helper (WIP)',
    image: 'https://i.imgur.com/5UPSNZU.png',
    imageAlt: 'Screenshot of the bird avatar generator',
    description:
      'A small, more focused wiki for the game Noita based on the in-game progress screen. Made with Nuxt 3.',
    liveDemo: 'https://noita-helper.jacoblong.dev',
    tags: ['Nuxt 3'],
  },
  {
    title: 'jacoblong.dev',
    image: '/og_image.png',
    imageAlt: 'My personal logo',
    description: 'My personal website made with VitePress, Vue 3, and UnoCSS.',
    liveDemo: 'https://jacoblong.dev',
    source: 'https://github.com/Jclong98/jacoblong.dev',
    tags: ['Vite', 'Vue 3', 'UnoCSS'],
  },
  {
    title: 'Todo React',
    image: '/card-todo-react.png',
    imageAlt: 'Screenshot of the Todo React Application',
    description:
      'Solution to the Frontend Mentor Todo Challenge. A todo list made with Vite, React, usehooks-ts, react-sortablejs, and TypeScript. I made this to learn React. Saves todo items to local storage.',
    liveDemo: 'https://gleaming-alpaca-bd8b47.netlify.app/',
    source: 'https://github.com/jclong98/todo-react',
    tags: ['Vite', 'React', 'TypeScript'],
  },
  {
    title: 'Todo Vue',
    image: '/card-todo-vue.png',
    imageAlt: 'Screenshot of the Todo Vue Application',
    description:
      'Solution to the Frontend Mentor Todo Challenge. A todo list made with Vite, Vue 3, VueUse, VueDraggable, and TypeScript. I made this as a comparison to the Todo-React project. They behave exactly the same. Saves todo items to local storage.',
    liveDemo: 'https://dreamy-bavarois-f624c2.netlify.app/',
    source: 'https://github.com/jclong98/todo-vue',
    tags: ['Vite', 'Vue 3', 'TypeScript'],
  },
  {
    title: 'Advice Generator App',
    image: '/card-advice-generator.png',
    imageAlt: 'Screenshot of the Advice Generator Application',
    description:
      'Solution to the Frontend Mentor Advice Generator Application Challenge. A Simple one button application that makes a request to an external API. Made with Vite, React, and UnoCSS.',
    liveDemo: 'https://beautiful-kitsune-fe1c9f.netlify.app',
    source: 'https://github.com/Jclong98/Frontend-Mentor-Advice-App',
    tags: ['Vite', 'React', 'UnoCSS', 'TypeScript'],
  },
  {
    title: 'Boids',
    image: 'https://i.imgur.com/YhK2Fox.png',
    imageAlt: 'Screenshot of the Boids Application',
    description:
      'A boids implementation with reactive sliders to play around with the simulation.',
    liveDemo: 'https://boids.jacoblong.dev',
    source: 'https://github.com/jclong98/boids-vue',
    tags: ['Vite', 'Vue 3'],
  },
]

const uniqueTags = projects
  .map((project) => project.tags)
  .flat()
  .filter((tag, index, self) => self.indexOf(tag) === index)

const selectedTags = ref([])

const filteredProjects = computed(() =>
  projects.filter((project) => {
    // if there are no selected tags, don't filter any projects
    if (selectedTags.value.length === 0) return true

    // only return true if the project has all the selected tags
    return selectedTags.value.every((tag) => project.tags.includes(tag))
  })
)
</script>
<template>
  <div class="grid gap-8 mb-8">
    <h1 class="text-5xl">Projects</h1>

    <div class="flex flex-wrap gap-4">
      <div v-for="tag in uniqueTags" :key="tag">
        <input
          type="checkbox"
          v-model="selectedTags"
          :value="tag"
          class="sr-only peer"
          :name="tag"
          :id="tag"
        />
        <label
          :for="tag"
          class="btn px-6 cursor-pointer flex gap-2 items-center py-2 rounded-full text-sm font-medium dark:bg-stone-800 select-none group peer-focus:ring-2 peer-focus:ring-amber-400"
          :class="[
            {
              'dark:text-amber-400': selectedTags.includes(tag),
            },
            selectedTags.includes(tag) ? 'bg-amber-300' : 'bg-stone-200',
          ]"
        >
          <span>{{ tag }}</span>
        </label>
      </div>
    </div>

    <article
      v-for="(project, index) in filteredProjects"
      :key="project.title"
      class="card grid gap-6 justify-between mt-8 md:mt-0 md:grid-cols-3"
    >
      <!-- Image -->
      <a
        :href="project.liveDemo"
        class="flex md:w-5/4 md:-translate-x-1/5 rounded-lg shadow-lg"
      >
        <img
          :src="project.image"
          :alt="project.imageAlt"
          class="object-cover rounded-lg -translate-y-12 -mb-12 md:translate-y-0 md:mb-0"
        />
      </a>

      <!-- Text & actions -->
      <div class="flex flex-col justify-between md:col-span-2">
        <!-- title and description -->
        <div class="grid gap-2">
          <h2 class="text-3xl font-semibold">
            <a :href="project.liveDemo">{{ project.title }}</a>
          </h2>
          <p>{{ project.description }}</p>
        </div>

        <!-- actions -->
        <div class="grid md:grid-cols-2 gap-4 mt-6">
          <!-- Live Demo -->
          <a
            v-if="project.liveDemo"
            :href="project.liveDemo"
            aria-label="Live Demo"
            class="btn px-8 text-center bg-amber-300 dark:bg-amber-400 text-black font-semibold"
          >
            Live Demo
            <Icon icon="mdi:open-in-new" class="inline" />
          </a>

          <!-- Source -->
          <a
            v-if="project.source"
            :href="project.source"
            aria-label="Source"
            class="btn px-8 text-center dark:border dark:text-amber-400 font-semibold"
          >
            Source
            <Icon icon="mdi:code-braces" class="inline" />
          </a>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="items-center px-4 py-1 rounded-full text-sm font-medium bg-stone-200 dark:bg-black dark:text-stone-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>
