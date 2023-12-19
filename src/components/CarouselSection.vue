<script setup>
import { HeartIcon } from "@heroicons/vue/24/outline";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const modules = [Pagination, Navigation, EffectFade, Autoplay];
</script>

<template>
  <div class="relative">
    <swiper
      effect="fade"
      :modules="modules"
      :navigation="true"
      :pagination="{ clickable: true }"
      :space-between="30"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="z-0 max-h-[800px] min-h-[600px] opacity-70"
    >
      <swiper-slide v-for="index in [1, 2]" :key="index">
        <img
          :alt="index"
          :src="`/carousel-${index}.jpg`"
          class="block min-h-[600px] object-cover"
        />
      </swiper-slide>
    </swiper>
    <div
      class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-gray-800"
    >
      <div class="">
        <div
          class="flex flex-col items-center justify-center gap-2 pb-6 font-dancing text-5xl sm:flex-row lg:text-6xl xl:text-6xl"
        >
          <div>Thu Thủy</div>
          <div>
            <HeartIcon class="h-8 w-8 text-rose-400 sm:h-10 sm:w-10" />
          </div>
          <div>Thanh Tùng</div>
        </div>
        <div class="text-md text-center font-poppins lg:text-lg xl:text-xl">
          <span class="tracking-tighter">&#x2015;&#x2015;</span>
          <span class="mx-3">30-31 Tháng 12 Năm 2023</span>
          <span class="tracking-tighter">&#x2015;&#x2015;</span>
        </div>
      </div>
    </div>
  </div>
</template>
