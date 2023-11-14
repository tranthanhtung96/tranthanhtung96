<script setup>
import {ref} from 'vue'

const registration = ref({
  name: "",
  phoneNumber: "",
  participants: 1,
  isBrideSGuests: true,
  isBusRegistered: true
})

const submit = () => {
  console.log({...registration.value})
}

</script>

<template>
  <div class="flex max-w-screen-xl mx-auto p-8">
    <div class="flex items-center w-1/3 bg-cyan-500 p-8">
      <div class="border-l-4 border-cyan-500 pl-4">
        <p class="text-3xl font-bold text-white pb-4">KÍNH MỜI</p>
        <p class="text-xl text-white">Để tiện cho gia đình cô dâu và chú rể chuẩn bị tiệc cưới, mong anh/chị/bạn bớt
          chút thời gian điền vào form này ạ</p>
      </div>
    </div>

    <form class="w-2/3 bg-white shadow-md rounded-md p-8">
      <p class="text-3xl font-bold mb-8 text-gray-800">HAPPY FORM</p>

      <div class="mb-4">
        <table class="w-full">
          <tr class="flex items-center mb-4">
            <th class="w-2/5 text-right pr-4 text-gray-800">Họ tên</th>
            <th class="w-3/5">
              <input type="text" class="p-2 w-full border rounded-md text-gray-800 bg-gray-300" required
                     v-model="registration.name">
            </th>
          </tr>

          <tr class="flex items-center mb-4">
            <th class="w-2/5 text-right pr-4 text-gray-800">Số điện thoại</th>
            <th class="w-3/5">
              <input type="text" class="p-2 w-full border rounded-md text-gray-800 bg-gray-300" required
                     v-model="registration.phoneNumber">
            </th>
          </tr>

          <tr class="flex items-center mb-4">
            <th class="w-2/5 text-right pr-4 text-gray-800">Đi mấy người</th>
            <th class="w-3/5">
              <input type="number" id="participants" min="1" max="6"
                     class="p-2 w-full border rounded-md text-gray-800 bg-gray-300" required
                     v-model="registration.participants">
            </th>
          </tr>

          <tr class="flex items-center mb-4">
            <th class="w-2/5 text-right pr-4 text-gray-800">Bạn của</th>
            <th class="w-3/5">
              <div class="flex items-center">
                <input type="radio" id="bride" class="mr-2" v-model="registration.isBrideSGuests" v-bind:value="true">
                <label for="bride" class="text-gray-800">Cô dâu</label>

                <input type="radio" id="groom" class="ml-4 mr-2" v-model="registration.isBrideSGuests"
                       v-bind:value="false">
                <label for="groom" class="text-gray-800">Chú rể</label>
              </div>
            </th>
          </tr>

          <tr class="flex items-center mb-4">
            <th class="w-2/5 text-right pr-4 text-gray-800">Đi ô tô không</th>
            <th class="w-3/5">
              <div class="flex items-center">
                <input type="radio" id="busYes" class="mr-2" required v-model="registration.isBusRegistered"
                       v-bind:value="true">
                <label for="busYes" class="text-gray-800">Có</label>

                <input type="radio" id="busNo" class="ml-8 mr-2" required v-model="registration.isBusRegistered"
                       v-bind:value="false">
                <label for="busNo" class="text-gray-800">Tự di chuyển</label>
              </div>
            </th>
          </tr>
        </table>
      </div>
      <button class="bg-cyan-500 font-bold text-white p-2 rounded-md hover:bg-cyan-800" v-on:click.prevent="submit">ĐĂNG
        KÝ
      </button>
    </form>
  </div>
</template>