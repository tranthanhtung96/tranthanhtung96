<script setup>
import {ref} from 'vue'
import NavBarAnchor from "./NavBarAnchor.vue";

defineProps({
  locationHash: String
})

const navbarStickyHidden = ref(true)
const sections = [
  {link: "#carousel", title: "Home"},
  {link: "#event", title: "Sự kiện cưới"},
  {link: "#registration", title: "Đăng ký xe"},
  {link: "#gift", title: "Mừng cưới"},
  {link: "#thank-you", title: "Lời cảm ơn"},
]

function toggleNavBarSticky() {
  navbarStickyHidden.value = !navbarStickyHidden.value
}
</script>

<template>
  <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto p-2">
      <button class="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              @click="toggleNavBarSticky">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="items-center justify-between w-full md:flex md:w-auto md:order-1"
           :class="{hidden: navbarStickyHidden}" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          <li v-for="section in sections">
            <NavBarAnchor :link="section.link" :title="section.title" :locationHash="locationHash"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>