<template>
  <!-- eslint-disable max-len -->
  <aside class="mb-2 sm:mb-4 xl:px-0">
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-1">
      <div class="p-4 bg-background-tertiary rounded-sm shadow grid-span-1 cursor-pointer">
        <div>
          <p class="text-blue-600 font-semibold text-sm mb-2">ВАЖНАЯ НОВОСТЬ</p>
          <p class="text-sm text-copy-secondary">Welcome to Darknet 2.0: Telegram позволил создавать сайты на базе TON</p>
        </div>
      </div>
      <div class="p-4 bg-background-secondary hidden sm:block rounded-sm shadow grid-span-1 cursor-pointer">
        <div>
          <p class="text-sm text-copy-secondary">История разработчика Яндекс.Такси: из итальянской академии Apple в российский IT-гигант</p>
          <p class="text-blue-500 font-semibold text-sm mt-2">Статьи, 27.02</p>
        </div>
      </div>
      <div class="p-4 bg-background-secondary hidden md:block rounded-sm shadow grid-span-1 cursor-pointer">
        <div>
          <p class="text-sm text-copy-secondary">Режиссёр фильма «Достать ножи»: Apple не разрешает злодеям в кино использовать iPhone</p>
          <p class="text-blue-600 font-semibold text-sm mb-2">Новости, 26.02</p>
        </div>
      </div>
    </div>
    <div class="p-4 mt-2 sm:mt-4 bg-background-secondary rounded-sm grid-span-3 md:hidden shadow cursor-pointer">
      <div>
        <p class="text-sm text-copy-secondary">Режиссёр фильма «Достать ножи»: Apple не разрешает злодеям в кино использовать iPhone</p>
        <div class="flex justify-between">
          <p class="text-blue-600 font-semibold text-sm mb-2">Новости, 26.02</p>
          <p class="text-blue-600 font-semibold text-sm mb-2">Materials of the week</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>

</style>
