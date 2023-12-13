<template>
  <div class="flex w-full flex-col items-center justify-center bg-[#F2EDED]">
    <img alt="flower" class="pt-20" src="/sec-title-flower.png" />
    <h1 class="pb-10 text-center font-dancing text-5xl font-bold">Mừng cưới</h1>
    <div
      class="flex flex-col items-center justify-center gap-y-5 pb-20 md:flex-row md:gap-x-10"
    >
      <div
        v-for="item in [1, 2]"
        class="flex w-80 items-center justify-center rounded-xl border-2 border-r-2 border-amber-800 bg-white"
      >
        <div>
          <div class="pt-7 text-center font-comfort text-xl">
            Mừng cưới đến {{ item == 1 ? "chú rể" : "cô dâu" }}
          </div>
          <img :alt="`q${1}`" :src="`/qr-${item}.jpg`" class="rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
