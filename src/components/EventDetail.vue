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
  <div class="flex flex-col items-center gap-4 shadow-2xl max-w-sm p-5 bg-[url('/event-bg.png')]">
    <div class="text-center font-comfort text-2xl">{{ title }}</div>
    <img class="rounded-full max-w-[13rem]" :src="imgSrc" :alt="imgSrc">
    <div class="text-center font-bold font-comfort">{{ time }}</div>
    <div class="text-center font-comfort">{{ address }}</div>
    <div class="w-full h-full py-1 flex flex-col justify-end items-center text-lg">
      <div class="w-full border-2 border-amber-600 rounded-full flex justify-center items-center">
        <a target="_blank" :href="mapsUrl">Xem bản đồ</a>
      </div>
    </div>
  </div>
</template>