<template>
  <!-- eslint-disable max-len -->
  <aside class="mb-2 sm:mb-4 xl:px-0">
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-1">
      <div class="p-4 rounded-sm shadow cursor-pointer bg-background-tertiary grid-span-1">
        <div>
          <p class="mb-2 text-sm font-semibold text-blue-600">ВАЖНАЯ НОВОСТЬ</p>
          <p class="text-sm text-copy-secondary">Welcome to Darknet 2.0: Telegram позволил создавать сайты на базе TON</p>
        </div>
      </div>
      <div class="hidden p-4 rounded-sm shadow cursor-pointer bg-background-secondary sm:block grid-span-1">
        <div>
          <p class="text-sm text-copy-secondary">История разработчика Яндекс.Такси: из итальянской академии Apple в российский IT-гигант</p>
          <p class="mt-2 text-sm font-semibold text-blue-500">Статьи, 27.02</p>
        </div>
      </div>
      <div class="hidden p-4 rounded-sm shadow cursor-pointer bg-background-secondary md:block grid-span-1">
        <div>
          <p class="text-sm text-copy-secondary">Режиссёр фильма «Достать ножи»: Apple не разрешает злодеям в кино использовать iPhone</p>
          <p class="mb-2 text-sm font-semibold text-blue-600">Новости, 26.02</p>
        </div>
      </div>
    </div>
    <div class="p-4 mt-2 rounded-sm shadow cursor-pointer sm:mt-4 bg-background-secondary grid-span-3 md:hidden">
      <div>
        <p class="text-sm text-copy-secondary">Режиссёр фильма «Достать ножи»: Apple не разрешает злодеям в кино использовать iPhone</p>
        <div class="flex justify-between mt-2">
          <p class="text-sm font-semibold text-blue-600">Новости, 26.02</p>
          <p class="text-sm font-semibold text-blue-600">Materials of the week</p>
        </div>
      </div>
    </div>
    <div>
      <div v-for="(item, i) in articles" :key="i">
        <items-sidebar :item="item" />
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
  </aside>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';
import ItemsSidebar from './ItemsSidebar.vue';

const useApi = (url, options = {}) => {
  const state = reactive({
    data: null,
    api_status: '',
  });
  const initFetch = async () => {
    try {
      state.api_status = 'FETCHING';
      const response = await fetch(url);
      const data = await response.json();
      state.data = data.articles;
      state.api_status = 'FETCHING_SUCCESS';
    } catch (error) {
      state.api_status = 'FETCHING_ERROR';
    }
  };
  // eslint-disable-next-line no-prototype-builtins
  if (options.hasOwnProperty('fetchImmediately') && options.fetchImmediately) {
    initFetch();
  }
  return {
    ...toRefs(state),
    initFetch,
  };
};
export default {
  name: 'Sidebar',
  components: { ItemsSidebar },
  setup() {
    // eslint-disable-next-line camelcase
    const { data, api_status, initFetch } = useApi(
      'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2fe02a107f914d02bf678cd0a8805d8a&pageSize=5',
      {
        fetchImmediately: true,
      },
    );
    return {
      articles: data,
      api_status,
      fetchArticle: initFetch,
      isOpen: false,
      menuShow: true,
    };
  },
};
</script>

<style scoped>

</style>
