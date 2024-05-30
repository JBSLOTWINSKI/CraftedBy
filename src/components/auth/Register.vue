<template>
  <div class="register-container">
    <h2>Créer un compte</h2>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="username">Nom d'utilisateur*</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="firstname">Prénom*</label>
        <input type="text" id="firstname" v-model="firstname" required />
      </div>
      <div class="input-group">
        <label for="lastname">Nom*</label>
        <input type="text" id="lastname" v-model="lastname" required />
      </div>
      <div class="input-group">
        <label for="email">Adresse mail*</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="street">Rue et Numéro*</label>
        <input type="text" id="street" v-model="street" required />
      </div>
      <div class="input-group">
        <label for="address2">Complément d'adresse (optionnel)</label>
        <input type="text" id="address2" v-model="address2" />
      </div>
      <div class="input-group">
        <label for="zipcode">Code postal*</label>
        <input type="text" id="zipcode" v-model="zipcode" required />
      </div>
      <div class="input-group">
        <label for="city">Ville*</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div class="input-group">
        <label for="country">Pays*</label>
        <input type="text" id="country" v-model="country" required />
      </div>
      <div class="input-group">
        <label for="phone">Numéro de téléphone*</label>
        <input type="text" id="phone" v-model="phone" required />
      </div>
      <div class="input-group">
        <label for="password">Mot de passe*</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="input-group">
        <label for="passwordConfirm">Mot de passe (confirmation)*</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" required />
      </div>
      <div class="input-group">
        <input type="checkbox" id="rgpd" v-model="rgpd" />
        <label for="rgpd">Je donne mon accord pour la collecte des données RGPD*</label>
      </div>
      <div class="input-group">
        <input type="checkbox" id="newsletter" v-model="newsletter" />
        <label for="newsletter">Je donne mon accord pour recevoir une quantité astronomique de publicité*</label>
      </div>
      <button type="submit">Valider</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

export default {
  name: 'Register',
  setup() {
    const authStore = useAuthStore();
    const username = ref('');
    const firstname = ref('');
    const lastname = ref('');
    const email = ref('');
    const street = ref('');
    const address2 = ref('');
    const zipcode = ref('');
    const city = ref('');
    const country = ref('');
    const phone = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const rgpd = ref(false);
    const newsletter = ref(false);

    const handleSubmit = async () => {
      if (password.value !== passwordConfirm.value) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }

      // Register logic here
      const user = {
        email: email.value,
        username: username.value,
        password: password.value,
        name: {
          firstname: firstname.value,
          lastname: lastname.value,
        },
        address: {
          city: city.value,
          street: street.value,
          number: address2.value ? address2.value : '',
          zipcode: zipcode.value,
          geolocation: {
            lat: '',
            long: '',
          }
        },
        phone: phone.value,
      };

      // Simulate a registration API call
      try {
        const response = await fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        alert('Compte créé avec succès');
        this.$router.push('/login');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration error');
      }
    };

    return {
      username,
      firstname,
      lastname,
      email,
      street,
      address2,
      zipcode,
      city,
      country,
      phone,
      password,
      passwordConfirm,
      rgpd,
      newsletter,
      handleSubmit,
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
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  padding: 10px;
  background-color: #ea4e48;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;
}

button:hover {
  background-color: #d43f3a;
}
</style>
