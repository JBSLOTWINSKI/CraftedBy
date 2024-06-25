<template>
  <div class="confirmation-order-container">
    <OrderSteps :steps="steps" :currentStep="currentStep" />
    <h1 class="title">Confirmation de la commande</h1>
    <div class="order-details">
      <div v-for="item in cart" :key="item.id" class="order-item">
        <p>{{ item.name }} x{{ item.quantity }} - {{ item.price * item.quantity }}€</p>
      </div>
      <p class="total-price">Total: {{ totalPrice }}€</p>
      <button @click="confirmOrder" class="confirm-button">Confirmer la commande</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useProductStore } from '@/stores/product';
import { useRouter } from 'vue-router';
import OrderSteps from '@/components/components/OrderSteps.vue';
import api from '@/api';

export default {
  name: 'ConfirmationOrder',
  components: {
    OrderSteps,
  },
  setup() {
    const authStore = useAuthStore();
    const productStore = useProductStore();
    const router = useRouter();

    const steps = ['Panier', 'Adresse', 'Paiement', 'Confirmation'];
    const currentStep = 4;

    const cart = productStore.cart;
    const totalPrice = productStore.totalPrice;

    const confirmOrder = async () => {
      try {
        const orderData = {
          user_id: authStore.user.id,
          total_price: totalPrice,
          products: cart.map(item => ({
            id: item.id,
            quantity: item.quantity,
          })),
        };
        await api.post('/orders', orderData);
        productStore.clearCart();
        await router.push('/order-success');
      } catch (error) {
        console.error('Error confirming order:', error);
      }
    };

    return {
      steps,
      currentStep,
      cart,
      totalPrice,
      confirmOrder,
    };
  },
};
</script>

<style scoped>
.confirmation-order-container {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2B2B42;
}

.order-details {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.total-price {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #EA4E48;
}

.confirm-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #EA4E48;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.confirm-button:hover {
  background-color: #d43e3b;
}
</style>
