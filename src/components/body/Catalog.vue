<template>
  <!-- Main container with flex layout and wrapping -->
  <div class="flex">
    <div v-for="product in products" :key="product.id">
      <ProductCard
          :id="product.id"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :image="product.image"
      />
    </div>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/product';
import ProductCard from '@/components/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  setup() {
    const productStore = useProductStore();
    const products = ref([]);

    onMounted(async () => {
      await productStore.fetchProducts();
      products.value = productStore.products;
    });

    return {
      products,
    };
  },
};
</script>
