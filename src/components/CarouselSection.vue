<script setup>
import {HeartIcon} from '@heroicons/vue/24/outline';
import {EffectFade, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const modules = [Pagination, Navigation, EffectFade]
</script>

<template>
  <div class="relative">
    <swiper
        class="w-full xl:h-[800px] z-0 opacity-80"
        :modules="modules"
        :space-between="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="index in [1, 2]" :key="index">
        <img class="block w-auto" :src="`/carousel-${index}.jpg`" :alt="index"/>
      </swiper-slide>
    </swiper>
    <div class="absolute inset-0 text-gray-800 flex justify-center items-center z-10 pointer-events-none">
      <div class="">
        <div class="xl:text-6xl lg:text-5xl text-4xl font-dancing pb-6 flex flex-col sm:flex-row justify-center items-center gap-2">
          <div>Thu Thủy</div>
          <div>
            <HeartIcon class="h-12 w-12 text-pink-600"/>
          </div>
          <div>Thanh Tùng</div>
        </div>
        <div class="xl:text-xl lg:text-lg text-md font-poppins text-center">
          <span>&#x2015;&#x2015;</span>
          <span class="mx-3">30-31 Tháng 12 Năm 2023</span>
          <span>&#x2015;&#x2015;</span></div>
      </div>
    </div>
  </div>
</template>