<script setup>
import EventDetail from "./EventDetail.vue";
import EventCalendar from "./EventCalendar.vue";
import SectionHeader from "./SectionHeader.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16 md:py-24">
    <SectionHeader title="Sự kiện cưới">
      ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về
      cùng một hướng...
    </SectionHeader>
    <div class="flex flex-col gap-4 md:flex-row md:justify-center">
      <EventDetail
        address="Nhà hàng Chen 1, 300 Trường Chinh, Vị Xuyên, tp. Nam Định"
        class="order-0 md:order-first md:basis-[20%]"
        img-src="/nam-dinh.jpg"
        maps-url="https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+Chen+1/@20.4377077,106.1802895,21z/data=!4m6!3m5!1s0x3135e7c87788ca69:0x553429ab6b0b85e3!8m2!3d20.4378655!4d106.1805004!16s%2Fg%2F11gxtl5rx9?entry=ttu"
        time="16:00 31/12/2023"
        title="TIỆC CƯỚI NHÀ CHÚ RỂ"
      />
      <EventCalendar class="md:order-0 order-first basis-[60%]" />
      <EventDetail
        address="Xóm 4, Phương Châu, Phú Phương, Ba Vì, tp. Hà Nội"
        class="md:basis-[20%]"
        img-src="/ba-vi.jpg"
        maps-url="https://www.google.com/maps/place/%C4%90%C3%ACnh+Ph%C6%B0%C6%A1ng+Ch%C3%A2u/@21.2467033,105.422279,279m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3134f344eafb833d:0xcbd407485ccb31a4!2zUGjGsMahbmcgQ2jDonUsIFBow7ogUGjGsMahbmcsIEJhIFbDrCwgSGFub2ksIFZpZXRuYW0!3b1!8m2!3d21.246332!4d105.4229159!16s%2Fg%2F1td30j3j!3m5!1s0x3134f344910bcddb:0xb89c0c38e44e05ca!8m2!3d21.2468191!4d105.4233931!16s%2Fg%2F11cnbl5y7f?entry=ttu"
        time="15:30 30/12/2023"
        title="TIỆC CƯỚI NHÀ CÔ DÂU"
      />
    </div>
  </div>
</template>
