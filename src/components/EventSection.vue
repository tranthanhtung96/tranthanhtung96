<script setup>
import EventDetail from "./EventDetail.vue";
import EventCalendar from "./EventCalendar.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center py-24">
    <div class="font-dancing text-6xl text-center pb-4">Sự kiện cưới</div>
    <div class="font-comfort text-2xl text-center pb-10 w-2/3">
      ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...
    </div>
    <EventCalendar class="flex md:hidden mb-10"/>
    <div class="flex flex-col md:flex-row md:justify-center gap-4">
      <EventDetail
          class="md:basis-[20%]"
          title="TIỆC CƯỚI NHÀ CHÚ RỂ"
          img-src="/nam-dinh.png"
          time="16:30 31/12/2023"
          address="Nhà hàng Chen, 300 Trường Chinh, Vị Xuyên, tp. Nam Định"
          maps-url="https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+Chen+1/@20.4377077,106.1802895,21z/data=!4m6!3m5!1s0x3135e7c87788ca69:0x553429ab6b0b85e3!8m2!3d20.4378655!4d106.1805004!16s%2Fg%2F11gxtl5rx9?entry=ttu"/>
      <EventCalendar class="basis-[60%] hidden md:flex"/>
      <EventDetail
          class="md:basis-[20%]"
          title="TIỆC CƯỚI NHÀ CÔ DÂU"
          img-src="/ba-vi.png"
          time="15:30 30/12/2023"
          address="Xóm 4, Phương Châu, Phú Phương, Ba Vì, tp. Hà Nội"
          maps-url="https://www.google.com/maps/place/%C4%90%C3%ACnh+Ph%C6%B0%C6%A1ng+Ch%C3%A2u/@21.2467033,105.422279,279m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3134f344eafb833d:0xcbd407485ccb31a4!2zUGjGsMahbmcgQ2jDonUsIFBow7ogUGjGsMahbmcsIEJhIFbDrCwgSGFub2ksIFZpZXRuYW0!3b1!8m2!3d21.246332!4d105.4229159!16s%2Fg%2F1td30j3j!3m5!1s0x3134f344910bcddb:0xb89c0c38e44e05ca!8m2!3d21.2468191!4d105.4233931!16s%2Fg%2F11cnbl5y7f?entry=ttu"/>
    </div>
  </div>
</template>