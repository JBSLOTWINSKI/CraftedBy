<template>
  <div class="icon-container">
    <router-link to="/cart" class="icon-link">
      <img src="../../assets/cartlogo.svg" alt="Cart Logo" class="icon" />
    </router-link>
    <img src="../../assets/connectlogo.svg" alt="Connect Logo" />
    <img src="../../assets/navlogo.svg" alt="Nav Logo" />
  </div>
</template>

<script>
export default {
  name: 'IconComponent'
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