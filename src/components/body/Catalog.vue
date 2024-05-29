<template>
  <div class="flex flex-wrap">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :image="product.image"
    />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'Catalog',
  components: { ProductCard },
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchProducts();
    });

    return {
      products: productStore.products,
    };
  },
};
</script>

<style scoped>

</style>
