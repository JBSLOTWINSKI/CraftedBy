<template>
  <div class="navbar">
    <Logo />
    <SearchBar />
    <IconComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from '../logos/Logo.vue'
import SearchBar from './SearchBar.vue'
import IconComponent from './IconComponent.vue'

export default defineComponent({
  name: 'NavbarContainer',
  components: {
    Logo,
    SearchBar,
    IconComponent
  },
})
</script>

<style scoped>
.navbar {
  width: 1920px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2B2D42;
  padding: 0 20px;
}
</style>

