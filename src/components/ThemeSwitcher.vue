<template>
  <!-- eslint-disable max-len -->
  <a href="#" class="flex items-center justify-center border-l-2 border-border-color-primary cursor-pointer text-copy-primary" @click.prevent="toggleTheme">
    <svg v-if="theme === 'theme-light'" class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  </a>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
      localStorage.setItem('theme', newTheme);
      this.$emit('themeChanged', newTheme);
    },
  },
};
</script>
