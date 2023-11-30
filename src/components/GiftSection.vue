<template>
  <div class="w-full bg-[#F2EDED] flex flex-col justify-center items-center">
    <img class="pt-20" src="/sec-title-flower.png" alt="flower">
    <h1 class="text-center font-dancing font-bold text-5xl pb-10">Mừng cưới</h1>
    <div class="pb-20 flex md:flex-row flex-col justify-center items-center md:gap-x-10 gap-y-5">
      <div
          class="w-80 border-2 border-amber-800 border-r-2 rounded-xl flex justify-center items-center bg-white"
          v-for="item in [1, 2]">
        <div>
          <div class="pt-7 text-center font-comfort text-xl">Mừng cưới đến {{ item == 1 ? 'chú rể' : 'cô dâu' }}</div>
          <img class="rounded-xl" :src="`/qr-${item}.jpg`" :alt="`q${1}`">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>