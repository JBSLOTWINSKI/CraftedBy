<template>
  <!-- Main container with flex layout to arrange items horizontally -->
  <div class="flex flex-row gap-5 w-full text-dark-purple">
    <!-- Left container for cart items and order steps -->
    <div class="flex-2 w-full">
      <!-- Order steps component with steps and current step as props -->
      <OrderSteps :steps="steps" :currentStep="currentStep" />
      <!-- Container for cart items -->
      <div>
        <!-- Iterate through cart items and render CartCardProduct for each item -->
        <CartCardProduct
            v-for="item in cart"
            :key="item.id"
            :item="item"
        />
      </div>
    </div>
    <!-- Right container for cart summary -->
    <div class="flex-1 border border-gray-300 text-dark-purple p-5 rounded-lg bg-white w-full">
      <h3 class="font-bold text-lg mb-5">Récapitulatif de votre commande</h3>
      <!-- Iterate through cart items and render a summary item for each -->
      <div v-for="item in cart" :key="item.id" class="flex justify-between mb-2">
        <p class="text-dark-purple">{{ item.title }} x{{ item.quantity }} - {{ item.price * item.quantity }}€</p>
      </div>
      <!-- Promo code input and validation section -->
      <div class="flex flex-col gap-2 mb-5">
        <label for="promo-code" class="font-medium">CODE PROMO</label>
        <input type="text" id="promo-code" v-model="promoCode" class="p-2 border rounded" />
        <button @click="applyPromoCode(promoCode)" class="p-2 bg-red-500 text-white rounded hover:bg-red-600">Valider</button>
      </div>
      <!-- Total price display -->
      <p class="font-bold text-lg mb-5">TOTAL : {{ totalPrice }}€</p>
      <!-- Checkout button -->
      <button @click="checkout" class="w-full p-3 bg-red-500 text-white rounded hover:bg-red-600">Commander</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/product';
import { computed } from 'vue';
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

    const cart = computed(() => productStore.cart);

    const promoCode = computed({
      get: () => productStore.promoCode,
      set: (value) => productStore.applyPromoCode(value)
    });

    const totalPrice = computed(() => productStore.totalPrice);

    const steps = ['Panier', 'Adresse', 'Paiement', 'Confirmation'];

    const currentStep = computed(() => productStore.currentStep);

    const applyPromoCode = (code) => {
      productStore.applyPromoCode(code);
    };

    const checkout = () => {

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
