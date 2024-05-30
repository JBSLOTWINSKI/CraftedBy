<template>
  <div class="profile-container">
    <h2>Mon Profil</h2>
    <div v-if="user">
      <div class="info-group">
        <p><strong>Nom d'utilisateur :</strong> {{ user.username }}</p>
      </div>
      <div class="info-group">
        <p><strong>Adresse mail :</strong> {{ user.email }}</p>
      </div>
      <div class="info-group">
        <p><strong>Numéro de téléphone :</strong> {{ user.phone }}</p>
      </div>
      <button class="logout-button" @click="logout">Se déconnecter</button>
    </div>
    <div v-else>
      <p>Chargement des informations...</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export default {
  name: 'Profile',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const user = authStore.user;

    const logout = () => {
      authStore.logout();
      router.push('/login');
    };

    return {
      user,
      logout,
    };
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.info-group {
  margin-bottom: 15px;
}

.logout-button {
  padding: 10px;
  background-color: #ea4e48;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;
}

.logout-button:hover {
  background-color: #d43f3a;
}
</style>
