<template>
  <div class="cart-container">
    <div class="cart-items-container">
      <OrderSteps :steps="steps" :currentStep="currentStep" />
      <div class="cart-items">
        <CartCardProduct
            v-for="item in cart"
            :key="item.id"
            :item="item"
        />
      </div>
    </div>
    <div class="cart-summary">
      <h3>Récapitulatif de votre commande</h3>
      <div v-for="item in cart" :key="item.id" class="summary-item">
        <p>{{ item.title }} x{{ item.quantity }} - {{ item.price * item.quantity }}€</p>
      </div>
      <div class="promo-code">
        <label for="promo-code">CODE PROMO</label>
        <input type="text" id="promo-code" v-model="promoCode" />
        <button @click="applyPromoCode(promoCode)">Valider</button>
      </div>
      <p>TOTAL : {{ totalPrice }}€</p>
      <button @click="checkout">Commander</button>
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
      // Logic for checkout
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

<style scoped>
.cart-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
}

.cart-items-container {
  flex: 2;
  width: 100%;
}

.cart-summary {
  flex: 1;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  width: 100%;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.promo-code {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.promo-code input {
  padding: 5px;
}

.promo-code button,
.cart-summary button {
  padding: 10px;
  background-color: #ea4e48;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.promo-code button:hover,
.cart-summary button:hover {
  background-color: #d43f3a;
}
</style>
