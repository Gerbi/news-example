<template>
  <!-- eslint-disable max-len -->
  <main>
    <div class="text-center" v-if="api_status === 'FETCHING'">Fetching</div>
    <div class="text-center" v-else-if="api_status === 'FETCHING_ERROR'">Error</div>
    <div v-else-if="api_status === 'FETCHING_SUCCESS'">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        <div v-for="(item, i) in articles" :key="i">
          <article class="relative w-full bg-background-secondary rounded-sm h-400 shadow col-span-1 sm:col-span-1">
            <router-link to="/+{i}" class="bg-background-secondary rounded-sm h-full">
              <div class="post-card-wrapper bg-cover rounded-t-sm h-40 px-16 pt-10 pb-16"
                   :style="{ backgroundImage: `url(${item.urlToImage})` }"
                   style="box-shadow: inset 0 0 0 9999px rgba(0,89,147,.75);">
                <div class="post-card-meta flex hidden">
                  <p class="post-card-label">Новости</p>
                  <time class="post-card-date" datetime="2020-03-05">
                    05.03
                  </time>
                </div>
                <div class="post-card-body hidden">
                  <div class="post-card-meta_">
                    <p class="post-card-label_">Новости</p>
                    <time class="post-card-date_" datetime="2020-03-05">
                      05.03
                    </time>
                  </div>
                  <h2 class="text-copy-primary text-lg font-bold">{{ item.title}}</h2>
                  <p class="post-card-excerpt md:hidden">Китайская компания TCL показала концепт смартфона с выдвижным экраном, превращающим его в полноценный планшет...</p>
                </div>
                <div class="post-card-extra hidden flex items-center">
                  <p class="post-card-button text-blue-600 font-medium bg-white px-6 py-2">Читать</p>
                  <div class="post-card-logo ml-8">
                    <svg class="w-6 h-6 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 705">
                      <path d="M.2 705v-14c0-45.9 0-91.8-.1-137.7 0-3.2 1-5 3.7-6.6 54.9-33.4 109.7-66.9 164.6-100.3 44.8-27.3 89.6-54.7 134.4-82 48.6-29.6 97.1-59.3 145.6-88.9.3-.2.7-.3 1.6-.6v17c0 44.9 0 89.7.1 134.6 0 3-.9 4.7-3.5 6.3-66.9 40.8-133.7 81.7-200.6 122.5-69.8 42.5-139.6 85.1-209.4 127.6C24.7 690.2 12.8 697.4.2 705zM.2 0c12.8 7.8 25 15.3 37.3 22.8 47.2 28.8 94.4 57.6 141.5 86.4 46.9 28.6 93.8 57.3 140.8 85.9 3.3 2 3 2.9-.1 4.7-40.3 24.5-80.6 49.1-120.8 73.8-2.5 1.5-4.2 1.5-6.6 0C129.7 235.3 66.9 197 4.1 158.8 1.1 157 0 155 0 151.5.2 102.9.2 54.4.2 5.8.1 4.1.2 2.4.2 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-5">
                <div class="flex items-center mb-3">
                  <button class="px-2 py-1 mr-4 text-xs text-blue-600 uppercase border border-blue-600 rounded-sm">news</button>
                  <time class="text-sm font-semibold text-blue-600">{{ item.publishedAt | moment("DD.MM") }}</time>
                </div>
                <div class="mb-2 text-lg font-medium text-copy-primary overflow-hidden" v-if="item.title && item.title.length > 1">
                  {{ item.title | truncate(80, '..') }}
                </div>
                <div class="text-sm text-copy-secondary text-justify overflow-hidden" v-if="item.description && item.description.length > 1">{{ item.description | truncate(80, '...') }}</div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
    </div>
    <div v-else>Oops, not found</div>
    <div class="text-center mt-4">
      <button class="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md" @click.prevent="fetchArticle">Read More...</button>
    </div>
  </main>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';

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
  name: 'Mainbar',
  setup() {
    // eslint-disable-next-line camelcase
    const { data, api_status, initFetch } = useApi(
      'http://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=2fe02a107f914d02bf678cd0a8805d8a',
      {
        fetchImmediately: true,
      },
    );
    return {
      articles: data,
      api_status,
      fetchArticle: initFetch,
    };
  },
};
</script>
