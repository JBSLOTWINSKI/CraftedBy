<template>

  <div class="flex flex-row gap-5 w-full text-dark-purple">
    <div class="flex-2 w-full">
      <OrderSteps :steps="steps" :currentStep="currentStep" />
      <div>
        <CartCardProduct
            v-for="item in cart"
            :key="item.id"
            :item="item"
        />
      </div>
    </div>
    <div class="flex-1 border border-gray-300 text-dark-purple p-5 rounded-lg bg-white w-full">
      <h3 class="font-bold text-lg mb-5">Récapitulatif de votre commande</h3>
      <div v-for="item in cart" :key="item.id" class="flex justify-between mb-2">
        <p class="text-dark-purple">{{ item.title }} x{{ item.quantity }} - {{ item.price * item.quantity }}€</p>
      </div>
      <div class="flex flex-col gap-2 mb-5">
        <label for="promo-code" class="font-medium">CODE PROMO</label>
        <input type="text" id="promo-code" v-model="promoCode" class="p-2 border rounded" />
        <button @click="applyPromoCode(promoCode)" class="p-2 bg-red-500 text-white rounded hover:bg-red-600">Valider</button>
      </div>
      <p class="font-bold text-lg mb-5">TOTAL : {{ totalPrice }}€</p>
      <button @click="checkout" class="w-full p-3 bg-red-500 text-white rounded hover:bg-red-600">Commander</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/product';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import CartCardProduct from '@/components/components/CartCardProduct.vue';
import OrderSteps from "@/components/components/OrderSteps.vue";

export default {
  name: 'Cart',
  components: {
    CartCardProduct,
    OrderSteps
  },
  setup() {
    const productStore = useProductStore();
    const router = useRouter();

    const cart = computed(() => productStore.cart);

    const promoCode = computed({
      get: () => productStore.promoCode,
      set: (value) => productStore.applyPromoCode(value)
    });

    const totalPrice = computed(() => productStore.totalPrice);

    const steps = ['Panier', 'Adresse', 'Paiement', 'Confirmation'];
    const currentStep = computed(() => 1);

    const applyPromoCode = (code) => {
      productStore.applyPromoCode(code);
    };

    const checkout = () => {
      router.push('/address');
    };

    return {
      cart,
      promoCode,
      totalPrice,
      applyPromoCode,
      checkout,
      steps,
      currentStep
    };
  },
};
</script>

<style>

</style>
