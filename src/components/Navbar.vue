<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>

            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
          </div>

          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <div v-for="(link, index) in links" v-bind:key="index">
                <a class="px-2 pt-2 pb-3 space-y-1" href="{{link.href}}">{{ link.name }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <img src="../assets/images/user.svg" class="block h-6 w-6" />
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div v-for="(link, index) in links" v-bind:key="index">
        <a class="px-2 pt-2 pb-3 space-y-1" href="{{link.href}}">{{ link.name }} </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav {
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
    background-image: linear-gradient(to top, hsla(0, 0%, 11%, 0.5), hsla(0, 0%, 11%, 0.5));
      backdrop-filter: blur(2em);
}
</style>

<script setup lang="ts">
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Faqs",
    href: "/#faqs",
  },
  {
    name: "Contact",
    href: "/#footer",
  },
];
</script>
