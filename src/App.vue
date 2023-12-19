<script setup>
import CarouselSection from "./components/CarouselSection.vue";
import GiftSection from "./components/GiftSection.vue";
import ThankYouSection from "./components/ThankYouSection.vue";
import RegistrationSection from "./components/RegistrationSection.vue";
import NavBar from "./components/NavBar.vue";

import EventSection from "./components/EventSection.vue";
import { onMounted, ref } from "vue";

import { login } from "./scripts/api.js";

const locationHash = ref("");

function changeLocationHash() {
  let sections = Array.from(document.querySelectorAll("section"));
  const section = sections.find((s) => {
    const rect = s.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    );
  });
  locationHash.value = `#${section.id}`;
}

onMounted(async () => {
  changeLocationHash();
  window.addEventListener("scroll", changeLocationHash);
  await login();
});
</script>

<template>
  <NavBar :location-hash="locationHash" />
  <section id="carousel">
    <CarouselSection />
  </section>
  <section id="event">
    <EventSection />
  </section>
  <section id="registration">
    <RegistrationSection />
  </section>
  <section id="gift">
    <GiftSection />
  </section>
  <section id="thank-you">
    <ThankYouSection />
  </section>
</template>

<style scoped></style>
