<script setup>
import {DevicePhoneMobileIcon} from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="py-24 flex flex-col justify-center items-center gap-10 bg-cover bg-right-bottom bg-[url('/footer-shape.png')]">
    <img class="h-64 w-64 sm:h-[32rem] sm:w-[32rem] rounded-full" src="/thank-you.png" alt="thank you">
    <div class="font-dancing text-4xl sm:text-6xl">Thank you!</div>
  </div>
  <div class="flex justify-center items-center gap-2 font-comfort bg-black text-white h-10 border-t-2 border-red-600">
    <DevicePhoneMobileIcon class="h-5 w-5 text-red-400"/>
    <p>Liên hệ: Tùng - 096.860.7430, Thủy - 032.841.7937</p>
  </div>
</template>