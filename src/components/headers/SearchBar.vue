<template>
  <div class="flex items-center bg-red-500 rounded-lg overflow-hidden w-96 h-8 border border-red-500">
    <select class="bg-red-500 text-white px-2 text-base h-full cursor-pointer rounded-l-lg">
      <option value="Shop">Shop</option>
      <option value="Product">Product</option>
    </select>
    <input type="text" placeholder="Search..." class="border-none px-2 flex-grow text-base bg-white text-black h-full" />
    <button class="px-2 cursor-pointer text-white h-full flex items-center">
      <router-link to="/catalog">
        <img src="../../assets/loupeicon.svg" alt="Search Icon" class="h-4 w-4" />
      </router-link>
    </button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SearchBar',
})
</script>
