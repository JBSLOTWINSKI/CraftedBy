<template>
  <div class="register-container">
    <h2 class="text-dark-purple">S'inscrire</h2>
    <router-link to="/login" class="login-button">Se connecter</router-link>
    <form @submit.prevent="handleRegister">
      <div class="input-group">
        <label for="pseudo" class="text-dark-purple">Pseudo</label>
        <input type="text" id="pseudo" v-model="pseudo" required />
      </div>
      <div class="input-group">
        <label for="first_name" class="text-dark-purple">Prénom</label>
        <input type="text" id="first_name" v-model="first_name" required />
      </div>
      <div class="input-group">
        <label for="last_name" class="text-dark-purple">Nom</label>
        <input type="text" id="last_name" v-model="last_name" required />
      </div>
      <div class="input-group">
        <label for="email" class="text-dark-purple">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password" class="text-dark-purple">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="input-group">
        <label for="password_confirmation" class="text-dark-purple">Confirmation du mot de passe</label>
        <input type="password" id="password_confirmation" v-model="passwordConfirmation" required />
      </div>
      <button type="submit" class="register-button">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import router from "@/routes.js";

export default {
  name: 'Register',
  setup() {
    const authStore = useAuthStore();
    const pseudo = ref('');
    const first_name = ref('');
    const last_name = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirmation = ref('');

    const handleRegister = async () => {
      try {
        const success = await authStore.register({
          pseudo: pseudo.value,
          first_name: first_name.value,
          last_name: last_name.value,
          email: email.value,
          password: password.value,
          password_confirmation: passwordConfirmation.value,
        });
        if (success) {
          await router.push('/login');
        } else {
          alert('Inscription échouée');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Erreur lors de l\'inscription: ' + error.message);
      }
    };

    return {
      pseudo,
      first_name,
      last_name,
      email,
      password,
      passwordConfirmation,
      handleRegister,
    };
  },
};
</script>

<style scoped>
.register-container {
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

.login-button {
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
  color: #2B2D42;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #2B2D42;
}

.register-button {
  padding: 10px;
  background-color: #2B2D42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.register-button:hover {
  background-color: #1f2130;
}
</style>
