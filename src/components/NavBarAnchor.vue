<script setup>

defineProps({
  link: String,
  title: String,
  locationHash: String,
})

</script>

<template>
  <a :href="link" class="block py-2 px-3 font-comfort font-bold"
     :class="link === locationHash ? 'text-whitebg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'"
     aria-current="page">{{ title }}</a>
</template>