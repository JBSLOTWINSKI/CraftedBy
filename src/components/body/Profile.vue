<template>
  <div class="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
    <h2 class="text-2xl mb-5">Mon Profil</h2>
    <!-- Check if user data is available -->
    <div v-if="user">
      <!-- Display user information -->
      <div class="mb-4">
        <p><strong>Nom d'utilisateur :</strong> {{ user.username }}</p>
      </div>
      <div class="mb-4">
        <p><strong>Adresse mail :</strong> {{ user.email }}</p>
      </div>
      <div class="mb-4">
        <p><strong>Numéro de téléphone :</strong> {{ user.phone }}</p>
      </div>
      <!-- Logout button -->
      <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Se déconnecter</button>
    </div>
    <!-- Loading message if user data is not available -->
    <div v-else>
      <p>Chargement des informations...</p>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';
import {useAuthStore} from '@/stores/auth';

export default {
  name: 'Profile',
  setup() {
    const router = useRouter(); // Access the router instance
    const authStore = useAuthStore(); // Access the authentication store
    const user = authStore.user; // Get the user data from the store

    // Function to log the user out
    const logout = () => {
      authStore.logout(); // Call the logout action from the store
      router.push('/login'); // Redirect to the login page
    };

    return {
      user,
      logout,
    };
  },
};
</script>

<style scoped>

</style>
