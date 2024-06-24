<template>
  <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
       style="width: 280px; height: 400px; flex-shrink: 0;">
    <img class="w-full h-auto object-contain" :src="image" alt="" style="max-height: 185px;" />
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold text-dark-purple line-clamp-2 mb-2">{{ name }}</h3>
        <p class="text-sm text-dark-purple mb-4 line-clamp-2">{{ description }}</p>
      </div>
      <div class="flex items-center justify-between mt-4">
        <p class="text-xl text-dark-purple font-semibold">{{ price }}€</p>
        <router-link :to="`/product/${id}`" class="flex items-center justify-center rounded-md bg-vermillon text-seasalt py-2 px-4 transition duration-150 ease-in-out hover:bg-red-600">
          Voir le produit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
