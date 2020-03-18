<template>
  <!-- eslint-disable max-len -->
  <header id="nav">
    <div class="">
      <nav
        class="relative flex flex-wrap items-center justify-between"
      >
      <div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-1">
      <div class="w-full p-4 rounded-sm shadow cursor-pointer bg-background-tertiary grid-span-1">
        <div>
          <p class="mb-2 text-sm font-semibold text-blue-600">ВАЖНАЯ НОВОСТЬ</p>
          <p class="text-sm text-copy-secondary">«Дуров был не рад, что во всё этах TON и Telegram</p>
        </div>
      </div>
      <p class="hidden lg:block text-copy-primary">The main materials of the week</p>
      <div class="hidden p-4 rounded-sm shadow cursor-pointer bg-background-secondary sm:block grid-span-1">
        <div>
          <p class="text-sm text-copy-secondary">История разработчика Яндекс.Такси: из итальянской академии Apple в российский IT-гигант</p>
          <p class="mt-2 text-sm font-semibold text-blue-500">Статьи, 27.02</p>
        </div>
      </div>
      <div class="hidden p-4 rounded-sm shadow cursor-pointer bg-background-secondary md:block grid-span-1">
        <div>
          <p class="text-sm text-copy-secondary">Режиссёр фильма «Достать ножи»: Apple не разрешает злодеям в кино использовать iPhone</p>
          <p class="mb-2 text-sm font-semibold text-blue-600">Новости, 29.02</p>
        </div>
      </div>
      <div v-for="(item, index) in getData" :key="index" class="hidden lg:block">
        <items-sidebar :item="item" />
      </div>
    </div>
    <div class="w-full md:hidden">
      <div class="p-4 mt-2 rounded-sm shadow cursor-pointer sm:mt-4 bg-background-secondary grid-span-3">
        <p class="text-sm text-copy-secondary">Режиссёр фильма «Достать ножи»: Apple не разрешает злодеям в кино использовать iPhone</p>
        <div class="flex items-center justify-between mt-2">
          <p class="text-sm font-semibold text-blue-600">Новости, 20.02</p>
          <button
            :class="{ 'block': !isOpen, 'hidden': isOpen }"
            ref="openButton"
            @click="toggle"
            type="button"
            class="flex items-center block text-sm text-blue-600 focus:outline-none"
            aria-label="Menu"
          >
          <span class="mr-1 text-copy-primary">
            <svg class="w-4 h-4 text-copy-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          Materials of the week
          </button>
        </div>
      </div>
    </div>
  </nav>
      <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="mr-0 md:hidden" v-if="menuShow">
        <div v-if="!getData">Loading the data</div>
        <div v-else-if="getData">
          <div v-for="(item, index) in getData" :key="index">
              <items-sidebar :item="item" />
          </div>
        </div>
        <div class="flex justify-center md:hidden">
          <button
            ref="openButton"
            @click="toggle"
            class="relative flex items-center justify-center w-12 h-12 -mt-5 rounded-full bg-background-primary focus:outline-none">
            <span class="flex items-center justify-center w-10 h-10 rounded-full shadow bg-background-secondary">
              <svg class="w-8 h-8 fill-current text-copy-primary" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L10 9.41421L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071Z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    </header>
</template>

<script>
import { store, mutations } from '../store/index';
import ItemsSidebar from './ItemsSidebar.vue';

export default {
  name: 'TopNews',
  components: { ItemsSidebar },
  data() {
    return {
      isOpen: false,
      menuShow: true,
      apiKey: '2fe02a107f914d02bf678cd0a8805d8a',
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    setData: mutations.setData,
    async fetch() {
      const req = await window.fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.apiKey}&pageSize=5`);
      const res = await req.json();
      return this.setData(res);
    },
  },
  computed: {
    getData() {
      return store.data.articles;
    },
  },
};
</script>
