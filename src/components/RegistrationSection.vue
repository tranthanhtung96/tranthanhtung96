<script setup>
import { ref } from "vue";
import SectionHeader from "./SectionHeader.vue";
import axios from "axios";

const registration = ref({
  name: "",
  phoneNumber: "",
  count: 1,
  bride: false,
  groom: false,
});

const submit = async () => {
  const resp = await axios.post(
    // "https://shiny-melomakarona-dee082.netlify.app/.netlify/functions/register",
    "http://localhost:8888/.netlify/functions/register",
    registration.value,
  );
  console.log(resp)
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-[#F2EDED] bg-opacity-50 py-16 md:py-24"
  >
    <SectionHeader title="Đăng ký xe">
      Nếu khoảng cách giữa đôi ta là 1000 bước, em chỉ cần bước một còn anh sẽ
      bước 999 bước còn lại.
    </SectionHeader>
    <div
      class="flex max-w-screen-sm flex-col rounded-xl px-4 font-comfort sm:flex-row"
    >
      <div
        class="rounded-b-none rounded-t-xl bg-rose-300 p-8 text-xl text-white sm:w-1/3 sm:rounded-l-xl sm:rounded-r-none"
      >
        Mọi người muốn đăng ký xe từ Hà Nội về đám cưới thì điền form này ạ.
      </div>

      <div
        class="flex flex-col items-center justify-center rounded-b-xl rounded-t-none border-2 border-rose-300 bg-white p-4 sm:w-2/3 sm:rounded-l-none sm:rounded-r-xl"
      >
        <table class="mb-4 w-full border-separate border-spacing-y-4">
          <tr class="items-center">
            <th class="pr-4 text-right text-gray-800">Họ tên</th>
            <th>
              <input
                type="text"
                class="w-full rounded-md border-2 border-rose-300 p-2 text-gray-800"
                required
                v-model="registration.name"
              />
            </th>
          </tr>

          <tr class="items-center">
            <th class="pr-4 text-right text-gray-800">Số điện thoại</th>
            <th>
              <input
                type="tel"
                class="w-full rounded-md border-2 border-rose-300 p-2 text-gray-800"
                required
                v-model="registration.phoneNumber"
              />
            </th>
          </tr>

          <tr class="items-center">
            <th class="pr-4 text-right text-gray-800">Đăng ký mấy người</th>
            <th>
              <input
                type="number"
                min="1"
                max="6"
                class="w-full rounded-md border-2 border-rose-300 p-2 text-gray-800"
                required
                v-model="registration.count"
              />
            </th>
          </tr>

          <tr class="items-center">
            <th class="pr-4 text-right text-gray-800">Đăng ký xe</th>
            <th>
              <div class="flex flex-row items-center gap-2">
                <div
                  class="flex w-max basis-1/2 flex-row items-center rounded-md border-2 border-rose-300 px-2 py-1"
                >
                  <input
                    type="checkbox"
                    class="border-rose mr-3 h-4 w-4 accent-rose-300 ring-rose-300"
                    v-model="registration.bride"
                  />
                  <div class="text-gray-800">Cô dâu</div>
                </div>

                <div
                  class="flex w-max basis-1/2 flex-row items-center rounded-md border-2 border-rose-300 px-2 py-1"
                >
                  <input
                    type="checkbox"
                    class="border-rose mr-3 h-4 w-4 accent-rose-300"
                    v-model="registration.groom"
                  />
                  <div class="text-gray-800">Chú rể</div>
                </div>
              </div>
            </th>
          </tr>
        </table>
        <button
          class="w-3/4 rounded-md bg-rose-300 p-2 font-bold text-white hover:bg-rose-600"
          v-on:click="submit"
        >
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  </div>
</template>
