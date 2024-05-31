<template>
  <!-- Main container with flex layout and wrapping -->
  <div class="flex flex-wrap">
    <!-- Iterate through products and render ProductCard for each product -->
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
  components: {ProductCard},
  setup() {
    const productStore = useProductStore();

    // Fetch products from the API when the component is mounted
    onMounted(() => {
      productStore.fetchProducts();
    });

    return {
      // Return the products from the store to be used in the template
      products: productStore.products,
    };
  },
};
</script>
