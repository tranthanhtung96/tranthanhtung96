<script setup>
defineProps({
  title: String,
  imgSrc: String,
  time: String,
  address: String,
  mapsUrl: String,
});
</script>

<template>
  <div
    class="flex max-w-sm flex-col items-center gap-4 bg-[url('/event-bg.jpg')] p-5 shadow-2xl"
  >
    <div class="text-center font-comfort text-2xl">{{ title }}</div>
    <img :alt="imgSrc" :src="imgSrc" class="max-w-[13rem] rounded-full" />
    <div class="text-center font-comfort font-bold">{{ time }}</div>
    <div class="text-center font-comfort">{{ address }}</div>
    <div
      class="flex h-full w-full flex-col items-center justify-end py-1 text-lg"
    >
      <div
        class="flex w-full items-center justify-center rounded-full border-2 border-amber-600"
      >
        <a :href="mapsUrl" target="_blank">Xem bản đồ</a>
      </div>
    </div>
  </div>
</template>
