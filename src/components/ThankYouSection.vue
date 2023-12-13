<script setup>
import { DevicePhoneMobileIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-10 bg-[url('/footer-shape.png')] bg-cover bg-right-bottom py-24"
  >
    <img
      class="h-64 w-64 rounded-full sm:h-[32rem] sm:w-[32rem]"
      src="/thank-you.png"
      alt="thank you"
    />
    <div class="font-dancing text-4xl sm:text-6xl">Thank you!</div>
  </div>
  <div
    class="flex h-10 items-center justify-center gap-2 border-t-2 border-red-600 bg-black font-comfort text-white"
  >
    <DevicePhoneMobileIcon class="h-5 w-5 text-red-400" />
    <p>Liên hệ: Tùng - 096.860.7430, Thủy - 032.841.7937</p>
  </div>
</template>
