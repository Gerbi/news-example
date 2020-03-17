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
    </div>
  </aside>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/composition-api';

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
  setup() {
    // eslint-disable-next-line camelcase
    const { data, api_status, initFetch } = useApi(
      'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2fe02a107f914d02bf678cd0a8805d8a&pageSize=5',
      {
        fetchImmediately: true,
      },
    );
    function toggle() {
      ref.isOpen = !ref.isOpen;
    }
    return {
      articles: data,
      api_status,
      fetchArticle: initFetch,
      isOpen: false,
      menuShow: true,
      toggle,
    };
  },
};
</script>

<style scoped>

</style>
