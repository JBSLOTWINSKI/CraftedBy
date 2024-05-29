<template>
  <div class="w-[480px] h-auto relative bg-neutral-50 rounded-2xl p-7 border border-zinc-200">
    <div class="flex flex-col items-start h-full">
      <div class="w-full flex justify-center mb-4">
        <div class="flex items-center">
          <div class="w-52 h-11 flex items-center opacity-50 bg-neutral-50 border border-slate-200 rounded-sm">
            <img class="w-7 h-7" src="/src/assets/fullstar.jpg" alt=""/>
            <img class="w-7 h-7" src="/src/assets/fullstar.jpg" alt=""/>
            <img class="w-7 h-7" src="/src/assets/fullstar.jpg" alt=""/>
            <img class="w-7 h-7" src="/src/assets/emptystar.jpg" alt=""/>
            <img class="w-7 h-7" src="/src/assets/emptystar.jpg" alt=""/>
          </div>
          <div class="ml-4 text-space-cadet text-lg font-semibold">362 avis</div>
        </div>
      </div>
      <div class="mb-4 w-full">
        <div class="text-space-cadet text-xl font-bold mb-2">Couleur :</div>
        <div class="w-full px-3.5 py-1.5 bg-neutral-50 rounded-sm shadow border border-slate-200 flex items-center justify-between">
          <div class="text-slate-800 text-lg font-semibold">Sélectionner une couleur</div>
          <div class="w-6 h-6"></div>
        </div>
      </div>
      <div class="mb-4 w-full">
        <div class="text-space-cadet text-xl font-bold mb-2">Matière :</div>
        <div class="w-full px-3.5 py-1.5 bg-neutral-50 rounded-sm shadow border border-slate-200 flex items-center justify-between">
          <div class="text-slate-800 text-lg font-semibold">Sélectionner une matière</div>
          <div class="w-6 h-6"></div>
        </div>
      </div>
      <div class="mb-4 w-full">
        <div class="text-space-cadet text-xl font-bold mb-2">Taille :</div>
        <div class="w-full px-3.5 py-1.5 bg-neutral-50 rounded-sm shadow border border-slate-200 flex items-center justify-between">
          <div class="text-slate-800 text-lg font-semibold">Sélectionner une taille</div>
          <div class="w-6 h-6"></div>
        </div>
      </div>
      <div class="flex-grow"></div>
      <div class="flex items-center justify-between w-full mt-auto">
        <div class="text-space-cadet text-3xl font-bold">{{ product.price }}€</div>
        <button @click="addToCart" class="px-4 py-2 bg-red-500 rounded-lg text-neutral-50 text-lg font-semibold">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useProductStore } from '@/stores/product';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const productStore = useProductStore();

const addToCart = () => {
  productStore.addToCart(props.product);
};
</script>

<style scoped>

</style>
