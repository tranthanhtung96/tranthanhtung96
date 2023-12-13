<script setup>
import { ref } from "vue";

const registration = ref({
  name: "",
  phoneNumber: "",
  participants: 1,
  isBrideSGuests: true,
});

const submit = () => {
  console.log({ ...registration.value });
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-6 bg-[url('/confetti.png')] bg-repeat-x pb-24 pt-20"
  >
    <div class="text-center font-dancing text-5xl sm:text-6xl">Đăng ký xe</div>
    <div
      class="flex max-w-screen-sm flex-col rounded-xl px-4 font-comfort sm:flex-row"
    >
      <div
        class="rounded-b-none rounded-t-xl bg-rose-300 p-8 text-xl text-white sm:w-1/3 sm:rounded-l-xl sm:rounded-r-none"
      >
        Để tiện cho gia đình cô dâu và chú rể chuẩn bị tiệc cưới, mong
        anh/chị/bạn bớt chút thời gian điền vào form này ạ
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
                class="w-full rounded-md border bg-gray-300 p-2 text-gray-800"
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
                class="w-full rounded-md border bg-gray-300 p-2 text-gray-800"
                required
                v-model="registration.phoneNumber"
              />
            </th>
          </tr>

          <tr class="items-center">
            <th class="pr-4 text-right text-gray-800">Đi mấy người</th>
            <th>
              <input
                type="number"
                id="participants"
                min="1"
                max="6"
                class="w-full rounded-md border bg-gray-300 p-2 text-gray-800"
                required
                v-model="registration.participants"
              />
            </th>
          </tr>

          <tr class="items-center">
            <th class="pr-4 text-right text-gray-800">Bạn của</th>
            <th>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="bride"
                  class="mr-2"
                  v-model="registration.isBrideSGuests"
                  v-bind:value="true"
                />
                <label for="bride" class="text-gray-800">Cô dâu</label>

                <input
                  type="radio"
                  id="groom"
                  class="ml-7 mr-2"
                  v-model="registration.isBrideSGuests"
                  v-bind:value="false"
                />
                <label for="groom" class="text-gray-800">Chú rể</label>
              </div>
            </th>
          </tr>
        </table>
        <button
          class="w-3/4 rounded-md bg-rose-300 p-2 font-bold text-white hover:bg-cyan-800"
          v-on:click.prevent="submit"
        >
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  </div>
</template>
