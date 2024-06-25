<template>
  <div class="payment-container">
    <OrderSteps :steps="steps" :currentStep="3" />
    <h1>Moyen de Paiement</h1>
    <form @submit.prevent="handlePayment">
      <div class="input-group">
        <label for="card-number">Numéro de Carte</label>
        <input type="text" id="card-number" v-model="cardNumber" required />
      </div>
      <div class="input-group">
        <label for="expiry-date">Date d'Expiration</label>
        <input type="text" id="expiry-date" v-model="expiryDate" required />
      </div>
      <div class="input-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" v-model="cvv" required />
      </div>
      <button type="submit" class="btn-pay">Payer</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import OrderSteps from '@/components/components/OrderSteps.vue';

export default {
  name: 'Payment',
  components: {
    OrderSteps
  },
  setup() {
    const cardNumber = ref('');
    const expiryDate = ref('');
    const cvv = ref('');
    const router = useRouter();
    const steps = ['Panier', 'Adresse', 'Paiement', 'Confirmation'];

    const handlePayment = () => {
      router.push('/confirmation-order');
    };

    return {
      cardNumber,
      expiryDate,
      cvv,
      steps,
      handlePayment
    };
  },
};
</script>

<style scoped>
.payment-container {
  min-width: 390px ;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-pay {
  padding: 10px 20px;
  background-color: #ea4e48;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-pay:hover {
  background-color: #d43e3b;
}
</style>
