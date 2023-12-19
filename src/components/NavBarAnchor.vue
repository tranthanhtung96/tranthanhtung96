<script setup>
defineProps({
  link: String,
  title: String,
  locationHash: String,
});
defineEmits(['hideAnchors'])
</script>

<template>
  <a
    @click="$emit('hideAnchors')"
    :href="link"
    class="block px-3 py-2 font-comfort font-bold"
    :class="
      link === locationHash
        ? 'rounded bg-blue-700 text-white md:bg-transparent md:p-0 md:text-blue-700'
        : 'rounded text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
    "
    aria-current="page"
    >{{ title }}</a
  >
</template>
