<template>
  <div class="login-container text-dark-purple">
    <h2>Connexion</h2>
    <router-link to="/register" class="register-button">S'inscrire</router-link>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="login-button">Se connecter</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      try {
        const success = await authStore.login({ email: email.value, password: password.value });
        if (success) {
          await router.push('/');
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Login error: ' + error.message);
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.login-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.register-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
}

.login-button {
  padding: 10px;
  background-color: #2B2D42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  width: 100%;
}

.login-button:hover {
  background-color: #1f2130;
}
</style>
