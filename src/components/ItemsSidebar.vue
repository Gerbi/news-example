<template>
  <!-- eslint-disable max-len -->
  <header id="nav" class="sticky top-0 z-40 p-2 sm:p-4 md:p-4 bg-background-primary xl:px-0">
      <div class="max-w-screen-xl mx-auto overflow-visible lg:px-4 xl:px-16">
        <div class="pl-3 bg-white rounded-sm shadow-sm bg-background-secondary">
          <nav
            class="relative flex flex-wrap items-center justify-between"
          >
            <div class="flex-shrink-0 pr-4 md:hidden">
              <button
                ref="openButton"
                @click="toggle"
                type="button"
                class="block text-blue-600 focus:outline-none"
                aria-label="Menu"
              >
                <svg class="w-6 h-6" v-if="isOpen" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="currentColor"/>
                </svg>
                <svg v-if="!isOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                  />
                  <path
                    d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                  />
                  <path
                    d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                  />
                </svg>
              </button>
            </div>
            <div
              class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between"
            >
              <div class="relative flex">
                <router-link to="/news" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">News</router-link>
                <router-link to="/technology" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">Technology</router-link>
                <router-link to="/economy" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">economy</router-link>
                <router-link to="/business" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">Business</router-link>
              </div>
            </div>
          </nav>
          <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="mr-0 -ml-3 md:hidden" v-if="menuShow">
            <div v-for="(item, i) in articles" :key="i">
                <div class="p-4 mt-2 rounded-sm shadow cursor-pointer sm:mt-4 bg-background-secondary grid-span-3 md:hidden">
                    <div class="h-full">
                        <p class="text-sm text-copy-secondary">{{ item.title }}</p>
                        <p class="mt-2 text-sm font-semibold text-blue-600">Новости,
                        <time :datetime="item.publishedAt">
                            {{ item.publishedAt | moment("DD.MM") }}
                        </time>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center md:hidden">
                <button class="relative flex items-center justify-center w-12 h-12 -mt-5 rounded-full bg-background-primary focus:outline-none">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-background-secondary">
                    <svg class="w-8 h-8 fill-current text-copy-primary" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L10 9.41421L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071Z"/>
                    </svg>
                </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  props: ['articles'],
  data() {
    return {
      isOpen: true,
      menuShow: true,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>

</style>
