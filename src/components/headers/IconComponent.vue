<template>
  <div class="icon-container">
    <router-link to="/cart" class="icon-link">
      <img src="@/assets/cartlogo.svg" alt="Cart Logo" class="icon" />
    </router-link>

    <router-link v-if="authStore.token " to="/profile" class="icon-link">
      <img src="@/assets/profillogo.svg" alt="Profile Logo" />
    </router-link>

    <router-link v-else to="/login" class="icon-link">
        <img src="@/assets/connectlogo.svg" alt="Connect Logo" />
    </router-link>


    <img src="@/assets/navlogo.svg" alt="Nav Logo" />
  </div>
</template>

<script>
import {useAuthStore} from "@/stores/auth.js";
export default {
  name: 'IconComponent',

  setup() {
    const authStore = useAuthStore();

    return {
      name: 'IconComponent',
      authStore
    }
  }
}
</script>

<style scoped>
.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
}

.icon-container img {
  height: 24px;
  width: 24px;
}

.icon-link {
  display: flex;
  align-items: center;
}

</style>