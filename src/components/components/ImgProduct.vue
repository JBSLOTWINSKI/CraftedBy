<template>
  <div class="img-product-container">
    <div class="img-large-container">
      <img :src="images[0]" class="img-large" alt=""/>
    </div>
    <div class="img-center-container">
      <img v-for="(image, index) in images.slice(1, 3)" :key="index" :src="image" class="img-center" alt=""/>
    </div>
    <div class="img-large-container">
      <img :src="images[3]" class="img-large" alt=""/>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.img-product-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 720px;
  gap: 10px;
  padding: 20px;
  background-color: var(--color-seasalt);
  border: 1px solid var(--color-platinum);
  border-radius: 15px;
  box-sizing: border-box;
}

.img-large-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-center-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.img-large, .img-center {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.img-large {
  max-height: 720px;
}

.img-center {
  max-height: 360px;
}
</style>
