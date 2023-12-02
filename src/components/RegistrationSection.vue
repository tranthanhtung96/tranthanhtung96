<script setup>
import {ref} from 'vue'

const registration = ref({
  name: "",
  phoneNumber: "",
  participants: 1,
  isBrideSGuests: true,
})

const submit = () => {
  console.log({...registration.value})
}

</script>

<template>
  <div class="flex flex-col justify-center items-center pt-20 pb-24 gap-6 bg-[url('/confetti.png')] bg-repeat-x">
    <div class="text-center font-dancing text-5xl sm:text-6xl">Đăng ký xe</div>
    <div class="flex sm:flex-row flex-col max-w-screen-sm rounded-xl px-4 font-comfort">
      <div class="sm:w-1/3 bg-rose-300 p-8 rounded-t-xl rounded-b-none sm:rounded-l-xl sm:rounded-r-none text-xl text-white">
        Để tiện cho gia đình cô dâu và chú rể chuẩn bị tiệc cưới, mong anh/chị/bạn bớt
        chút thời gian điền vào form này ạ
      </div>

      <div class="flex flex-col justify-center items-center sm:w-2/3 bg-white p-4 border-2 border-rose-300 sm:rounded-l-none sm:rounded-r-xl rounded-t-none rounded-b-xl">
        <table class="mb-4 w-full border-separate border-spacing-y-4">
          <tr class="items-center">
            <th class="text-right pr-4 text-gray-800">Họ tên</th>
            <th>
              <input type="text" class="p-2 w-full border rounded-md text-gray-800 bg-gray-300" required
                     v-model="registration.name">
            </th>
          </tr>

          <tr class="items-center">
            <th class="text-right pr-4 text-gray-800">Số điện thoại</th>
            <th>
              <input type="tel" class="p-2 w-full border rounded-md text-gray-800 bg-gray-300" required
                     v-model="registration.phoneNumber">
            </th>
          </tr>

          <tr class="items-center">
            <th class="text-right pr-4 text-gray-800">Đi mấy người</th>
            <th>
              <input type="number" id="participants" min="1" max="6"
                     class="p-2 w-full border rounded-md text-gray-800 bg-gray-300" required
                     v-model="registration.participants">
            </th>
          </tr>

          <tr class="items-center">
            <th class="text-right pr-4 text-gray-800">Bạn của</th>
            <th>
              <div class="flex items-center">
                <input type="radio" id="bride" class="mr-2" v-model="registration.isBrideSGuests" v-bind:value="true">
                <label for="bride" class="text-gray-800">Cô dâu</label>

                <input type="radio" id="groom" class="ml-7 mr-2" v-model="registration.isBrideSGuests"
                       v-bind:value="false">
                <label for="groom" class="text-gray-800">Chú rể</label>
              </div>
            </th>
          </tr>
        </table>
        <button class="w-3/4 bg-rose-300 font-bold text-white p-2 rounded-md hover:bg-cyan-800"
                v-on:click.prevent="submit">ĐĂNG KÝ
        </button>
      </div>
    </div>
  </div>
</template>