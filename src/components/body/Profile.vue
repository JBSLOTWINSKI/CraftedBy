<template>
  <div class="profile-container">
    <h1>Mon Profil</h1>
    <div v-if="user">
      <p><strong>Nom :</strong> {{ user.first_name }} {{ user.last_name }}</p>
      <p><strong>Email :</strong> {{ user.email }}</p>
      <button @click="logout" class="btn-logout">Se Déconnecter</button>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'Profile',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = async () => {
      try {
        await authStore.logout();
        await router.push('/home');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    return {
      user: authStore.user,
      logout,
    };
  },
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-logout {
  padding: 10px 20px;
  background-color: #ea4e48;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-logout:hover {
  background-color: #d43e3b;
}
</style>
