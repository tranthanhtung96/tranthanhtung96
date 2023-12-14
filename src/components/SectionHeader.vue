<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <img alt="flower" src="/sec-title-flower.png" />
  <div class="pb-4 text-center font-dancing text-5xl md:text-6xl">
    {{ title }}
  </div>
  <div class="w-2/3 pb-10 text-center font-comfort text-lg md:text-2xl">
    <slot> </slot>
  </div>
</template>

<style scoped></style>