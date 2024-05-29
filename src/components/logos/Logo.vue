<template>
  <div class="logo">
    <router-link to="/">
      <img src="../../assets/logo.svg" alt="CRAFTEDBY Logo" />
    </router-link>  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
.logo {
  width: 246px;
  height: 49px;
  display: flex;
  align-items: center;
}

.logo img {
  height: 60px;
}
</style>
