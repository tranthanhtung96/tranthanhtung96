<script setup>
import { DevicePhoneMobileIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-10 bg-[url('/footer-shape.png')] bg-cover bg-right-bottom py-24"
  >
    <img
      class="h-72 w-72 rounded-full sm:h-[32rem] sm:w-[32rem]"
      src="/thank-you.jpg"
      alt="thank you"
    />
    <div class="font-dancing text-5xl sm:text-6xl">Thank you!</div>
  </div>
  <div
    class="flex h-10 items-center justify-center border-t-2 border-red-600 bg-black font-comfort text-white"
  >
    <DevicePhoneMobileIcon class="mb-1 h-5 w-5 text-red-400" />
    <p class="mr-2 font-comfort text-sm md:text-lg">
      LH: Tùng - 096.860.7430, Thủy - 032.841.7937
    </p>
  </div>
</template>
