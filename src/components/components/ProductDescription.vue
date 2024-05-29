<template>
  <div class="w-[935px] h-[600px] px-[41px] py-[29px] bg-seasalt rounded-[15px] border border-platinum flex-col justify-start items-start gap-[62px] inline-flex">
    <div class="self-stretch h-[140px] p-2.5 flex-col justify-start items-start gap-6 flex">
      <div class="text-space-cadet text-[22px] font-bold">Notre produit</div>
      <div class="w-[717px] text-space-cadet text-base font-normal">{{ product.description }}</div>
    </div>
    <div class="p-2.5 flex-col justify-start items-start gap-6 flex">
      <div class="text-space-cadet text-[22px] font-bold">Caractéristiques du produit</div>
      <div class="w-[717px] text-space-cadet text-base font-normal">Produit en ça<br/>Mais aussi en ça<br/>Sans oublier ça</div>
    </div>
    <div class="p-2.5 flex-col justify-start items-start gap-6 flex">
      <div class="text-space-cadet text-[22px] font-bold">Kikilafé</div>
      <div class="w-[717px] text-space-cadet text-base font-normal">Découvrez l’égo de la personne qui a créé ce produit (du moins, si on croit ce que l’on raconte). Ce mini paragraphe vous permettra de constater le melon du gars. 100% c'est Maxoupinou.</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>

</style>
