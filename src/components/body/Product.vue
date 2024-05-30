

<script>
import {onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import {useProductStore} from '@/stores/product';
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
    const route = useRoute();
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchProductById(route.params.id);
    });

    watch(() => route.params.id, (newId) => {
      productStore.fetchProductById(newId);
    });

    return {
      productStore,
    };
  },
};
</script>

<template>
  <div>
    <ImgProduct v-if="productStore.selectedProduct" :images="[productStore.selectedProduct.image]" />
    <div class="flex">
      <ProductDescription v-if="productStore.selectedProduct" class="flex-2" :product="productStore.selectedProduct" />
      <PersonnalisationPrice v-if="productStore.selectedProduct" class="flex-1" :product="productStore.selectedProduct" />
    </div>
  </div>
</template>

<style scoped>

</style>
