<template>
  <div>
    <!-- Display the product image if a product is selected -->
    <ImgProduct v-if="productStore.selectedProduct" :images="[productStore.selectedProduct.image]" />

    <!-- Main container with flex layout for product details and pricing -->
    <div class="flex flex-wrap mt-4">
      <!-- Product description section with flex-grow for larger space allocation -->
      <ProductDescription v-if="productStore.selectedProduct" class="flex-1" :product="productStore.selectedProduct" />

      <!-- Personalization and price section with flex-grow for smaller space allocation -->
      <PersonnalisationPrice v-if="productStore.selectedProduct" class="flex-1" :product="productStore.selectedProduct" />
    </div>
  </div>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';
import ImgProduct from '../components/ImgProduct.vue';
import ProductDescription from '../components/ProductDescription.vue';
import PersonnalisationPrice from '../components/PersonnalisationPrice.vue';

export default {
  name: 'Product',
  components: {
    ImgProduct,
    ProductDescription,
    PersonnalisationPrice,
  },
  setup() {
    const route = useRoute(); // Access the current route
    const productStore = useProductStore(); // Access the product store

    // Fetch the product by ID when the component is mounted
    onMounted(() => {
      productStore.fetchProductById(route.params.id);
    });

    // Watch for changes in the route params and fetch the new product
    watch(() => route.params.id, (newId) => {
      productStore.fetchProductById(newId);
    });

    return {
      productStore,
    };
  },
};
</script>

<style scoped>

</style>
