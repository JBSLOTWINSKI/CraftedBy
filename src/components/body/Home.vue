<script>
import Breadcrumbs from "@/components/components/breadcrumbs.vue";
import ProductCard from "@/components/components/ProductCard.vue";

export default {
  name: 'Home',
  components: {ProductCard, Breadcrumbs},
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json;
        });
  },
};
</script>

<template>
  <div class="flex flex-wrap">
    wesh le home
  </div>
</template>

<style scoped>

</style>