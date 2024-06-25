<template>
  <div class="address-container">
    <OrderSteps :steps="steps" :currentStep="2" />
    <h1>Adresse de Livraison</h1>
    <form @submit.prevent="handleAddress">
      <div class="input-group">
        <label for="address">Adresse</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <div class="input-group">
        <label for="city">Ville</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div class="input-group">
        <label for="postal-code">Code Postal</label>
        <input type="text" id="postal-code" v-model="postalCode" required />
      </div>
      <button type="submit" class="btn-save">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import OrderSteps from '@/components/components/OrderSteps.vue';

export default {
  name: 'Address',
  components: {
    OrderSteps
  },
  setup() {
    const address = ref('');
    const city = ref('');
    const postalCode = ref('');
    const router = useRouter();
    const steps = ['Panier', 'Adresse', 'Paiement', 'Confirmation'];

    const handleAddress = () => {
      router.push('/payment');
    };

    return {
      address,
      city,
      postalCode,
      steps,
      handleAddress
    };
  },
};
</script>

<style scoped>
.address-container {
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

.btn-save {
  padding: 10px 20px;
  background-color: #ea4e48;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-save:hover {
  background-color: #d43e3b;
}
</style>
