<template>
  <div class="flex justify-between items-center w-40">
    <!-- Link to the cart page -->
    <router-link to="/cart" class="flex items-center">
      <img src="@/assets/cartlogo.svg" alt="Cart Logo" class="h-6 w-6" />
    </router-link>

    <!-- Conditionally render profile or login link based on authentication status -->
    <router-link v-if="authStore.token" to="/profile" class="flex items-center">
      <img src="@/assets/profillogo.svg" alt="Profile Logo" class="h-6 w-6" />
    </router-link>

    <router-link v-else to="/login" class="flex items-center">
      <img src="@/assets/connectlogo.svg" alt="Connect Logo" class="h-6 w-6" />
    </router-link>

    <!-- Static navigation logo -->
    <img src="@/assets/navlogo.svg" alt="Nav Logo" class="h-6 w-6" />
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js';

export default {
  name: 'IconComponent',

  setup() {
    // Access the authentication store
    const authStore = useAuthStore();

    return {
      authStore
    };
  }
};
</script>
