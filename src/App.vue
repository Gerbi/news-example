<template>
<!-- eslint-disable max-len -->
<div class="min-h-screen bg-background-primary" :class="theme">
    <header id="nav" class="sticky top-0 z-40 p-2 sm:p-4 md:p-4 bg-background-primary xl:px-0">
      <div class="max-w-screen-xl mx-auto overflow-visible lg:px-4 xl:px-16">
        <div class="pl-3 bg-white rounded-sm shadow-sm bg-background-secondary">
          <nav
            class="relative flex flex-wrap items-center justify-between"
          >
            <router-link to="/" class="relative z-10 flex-shrink-0 py-2 pl-4 md:p-0">
              <svg class="w-8 h-8 text-blue-600 fill-current" viewBox="0 0 20 20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.955 3.447C5.154 1.79 7.403 0 7.895 0c.493 0 2.742 1.791 3.942 3.447.984 1.359 1.31 2.375 1.78 3.842l.19.59c.55 1.685.985 4.43.985 4.43s.296 1.35 0 1.478l-5.911 3.939c-.723.368-1.155.362-1.97 0-.812-.54-1.762-1.155-2.66-1.737-1.659-1.073-3.142-2.032-3.252-2.202-.128-.198-.063-.822-.023-1.203.013-.127.023-.226.023-.274-.002-.193.435-2.746.985-4.432l.19-.589c.47-1.467.796-2.483 1.78-3.842zM6.91 8.863s.555.492.986.492c.43 0 .985-.492.985-.492s.809-.803 1.478-.985c.556-.152.956-.247 1.478 0 .591.28.75.761.949 1.368l.036.11c.397 1.196-.193 2.043-.867 3.012-.204.293-.416.598-.611.926-.177.3-.327.595-.47.878-.478.943-.886 1.748-1.993 2.076-.738.219-1.233.219-1.97 0-1.108-.328-1.516-1.133-1.994-2.076-.143-.283-.293-.579-.47-.878a14.933 14.933 0 00-.61-.926c-.675-.969-1.264-1.816-.868-3.013l.036-.109c.2-.607.358-1.088.95-1.368.521-.247.92-.152 1.477 0 .67.182 1.478.985 1.478.985zm.986 5.908c1.088 0 1.97-.661 1.97-1.477 0-.816-.882-1.477-1.97-1.477-1.089 0-1.97.661-1.97 1.477 0 .816.881 1.477 1.97 1.477z"/>
              </svg>
            </router-link>
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
                <router-link to="/sports" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">sports</router-link>
                <ThemeSwitcher class="px-3" :theme="theme" @themeChanged="updateTheme" />
              </div>
            </div>
          </nav>
          <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="mr-0 -ml-3 md:hidden" v-if="menuShow">
            <div class="flex flex-col justify-center text-center">
              <router-link to="/news" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">News</router-link>
                <router-link to="/technology" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">Technology</router-link>
                <router-link to="/economy" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">economy</router-link>
                <router-link to="/business" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">Business</router-link>
                <router-link to="/sports" class="px-5 py-3 text-copy-primary hover:bg-blue-500 hover:text-white">sports</router-link>
              <div class="px-10 my-4">
                <ThemeSwitcher :theme="theme" @themeChanged="updateTheme" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="max-w-screen-xl pb-6 mx-auto overflow-x-hidden lg:px-4 xl:px-16">
        <div class="flex flex-col lg:flex-row">
          <div class="order-last w-full px-2 lg:order-first sm:px-4 lg:w-3/4 lg:pl-0 lg:pl-4 xl:px-0">
            <router-view></router-view>
          </div>
          <div class="order-first w-full px-2 lg:order-last sm:px-4 lg:w-1/4 lg:pl-0 lg:pr-4 xl:pr-0 xl:pl-4">
            <!-- <Sidebar /> -->
          </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'First',
  components: {
    Footer,
    ThemeSwitcher,
    // Sidebar,
  },
  data() {
    return {
      theme: '',
      isOpen: false,
      menuShow: true,
    };
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light';
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>
<style src="./assets/css/Tailwind.css">

</style>
