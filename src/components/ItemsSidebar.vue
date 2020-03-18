<template>
  <!-- eslint-disable max-len -->
<div class="p-4 mt-2 rounded-sm shadow cursor-pointer bg-background-secondary grid-span-3">
    <div class="h-full">
        <p class="text-sm text-copy-secondary">{{ item.title }}</p>
        <p class="mt-2 text-sm font-semibold text-blue-600">Новости,
            <time :datetime="item.publishedAt">
                {{ item.publishedAt | moment("DD.MM") }}
            </time>
        </p>
    </div>
</div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      i: null,
    };
  },
};
</script>

<style>

</style>
