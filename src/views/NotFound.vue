<template>
  <!-- eslint-disable max-len -->
  <div class="flex justify-center items-center min-h-screen bg-gray-200">
      <div class="text-center">
        <div class="text-4xl text-gray-700 pb-20">404 Not Found</div>
      </div>
    <div class="absolute top-0 mt-10 mr-10 right-0">
      <router-link to="/" class="px-5 py-3 mx-2 text-sm font-medium leading-none text-gray-700 rounded-lg hover:shadow-md bg-white">
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>

</style>
