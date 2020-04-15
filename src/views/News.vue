<template>
  <!-- eslint-disable max-len -->
  <div class="mt-2">
    <div class="mt-24 text-4xl font-medium text-center text-blue-600" v-if="fetching">Loading...</div>
    <div class="text-center" v-if="error">Error</div>
    <div class="flex flex-wrap -m-2">
      <div v-for="(item, i) in list" :key="i" class="flex flex-col w-full p-2 sm:w-1/2 md:w-1/3">
        <div class="flex flex-col flex-1 overflow-hidden rounded-sm shadow-lg bg-background-secondary">
          <div class="h-48 bg-cover"
            :style="{ backgroundImage: `url(${item.urlToImage})`}"
            style="box-shadow: inset 0 0 0 9999px rgba(0,89,147,.75);"
            ></div>
            <div class="flex flex-col flex-1 p-4" style="
            ">
                <h3 class="mb-4 text-xl text-copy-primary" v-if="item.title && item.title.length > 1">{{ item.title | truncate(50, '..') }}</h3>
                <div class="flex-1 mb-4 text-sm text-gray-600">
                <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import useBrewList from '../utils/list';

export default ({
  name: 'News',
  setup() {
    const {
      submitted,
      list,
      val,
      error,
      fetching,
    } = useBrewList();
    onMounted(() => {
      submitted();
    });
    return {
      val,
      list,
      submitted,
      error,
      fetching,
    };
  },
});
</script>
