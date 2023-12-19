<script setup>
import { ref } from "vue";
import NavBarAnchor from "./NavBarAnchor.vue";

defineProps({
  locationHash: String,
});

const navbarStickyHidden = ref(true);
const sections = [
  { link: "#carousel", title: "Home" },
  { link: "#event", title: "Sự kiện cưới" },
  { link: "#registration", title: "Đăng ký xe" },
  { link: "#gift", title: "Mừng cưới" },
  { link: "#thank-you", title: "Lời cảm ơn" },
];

function toggleNavBarSticky() {
  navbarStickyHidden.value = !navbarStickyHidden.value;
}
</script>

<template>
  <nav
    class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white"
  >
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2"
    >
      <div
        class="flex flex-row items-center justify-center gap-1 font-dancing font-bold"
      >
        <img class="h-9 w-9" alt="happy" src="/happiness.png" />
      </div>
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        @click="toggleNavBarSticky"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="w-full items-center justify-between md:flex md:w-auto"
        :class="{ hidden: navbarStickyHidden }"
        id="navbar-sticky"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0"
        >
          <li v-for="section in sections">
            <NavBarAnchor
              @hide-anchors="toggleNavBarSticky"
              :link="section.link"
              :title="section.title"
              :locationHash="locationHash"
            />
          </li>
        </ul>
      </div>
      <div class="order-first w-10 md:order-last" />
    </div>
  </nav>
</template>
