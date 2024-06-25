<template>
  <div class="cart-item">
    <img :src="item.image" alt="Product Image" class="item-image" />
    <div class="item-details">
      <h3>{{ item.name }}</h3>
      <p>Quantité : {{ item.quantity }}</p>
      <p>Taille : {{ item.size }}</p>
      <p>Prix unitaire : {{ item.price }}€</p>
      <p>Prix total : {{ item.price * item.quantity }}€</p>
      <button @click="removeFromCart(item.id)" class="remove-button">Retirer</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/product';

export default {
  name: 'CartCardProduct',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    const productStore = useProductStore();

    const removeFromCart = (productId) => {
      productStore.removeFromCart(productId);
    };

    return {
      removeFromCart
    };
  }
};
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.remove-button {
  padding: 10px;
  background-color: #ea4e48;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;
}

.remove-button:hover {
  background-color: #d43f3a;
}
</style>
