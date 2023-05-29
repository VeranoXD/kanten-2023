<template>
  <div class="event-wrapper flex flex-col min-h-xl max-h-8xl bg-black">
    <div class="mx-auto max-w-screen-4xl text-center lg:py-16 lg:px-12">
      <!--    <img class="relative w-fit " v-if="event.welcomeScreen" :src="`../src/assets/eventPhotos/${event.photo}.png`" alt=""/> -->
      <h1
        class="mb-8 py-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
        v-if="event.welcomeScreen"
      >
        {{ event.title }}
      </h1>
      <p
        class="mb-8 max-w-screen-xl text-lg font-semibold text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        v-if="event.welcomeScreen"
      >
        {{ event.titleText }}
      </p>
      <div
        class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <router-link
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-orange-700 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          v-if="event.welcomeScreen"
          to="#"
        >
          Se Events
        </router-link>
        <router-link
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          v-if="event.welcomeScreen"
          to="#"
        >
          Bliv Frivillig
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "events",
  props: ["event"],
};
</script>

<style>
</style>