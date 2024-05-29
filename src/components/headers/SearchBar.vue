<template>
  <div class="search-bar">
    <select>
      <option value="Shop">Shop</option>
      <option value="Product">Product</option>
      <img src="../../assets/defileicon.svg" alt="Search Icon" />
    </select>
    <input type="text" placeholder="Search..." />
    <button>
      <router-link to="/catalog">
      <img src="../../assets/loupeicon.svg" alt="Search Icon" />
      </router-link>
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',
  setup() {
  }
})
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #EA4E48;
  border-radius: 16px;
  overflow: hidden;
  width: 700px;
  height: 32px;
  border: 1px solid #EA4E48;
  font-family: 'nunito', sans-serif;
}

.search-bar select {
  background-color: #EA4E48;
  color: #FCFAFA;
  padding: 0 10px;
  font-size: 18px;
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  cursor: pointer;
  background-position: right 10px center;
}

.search-bar input {
  border: none;
  padding: 5px 10px;
  flex-grow: 1;
  font-size: 18px;
  background-color: #FCFAFA;
  color: #160C28;
  height: 100%;
}

.search-bar button {
  padding: 0 10px;
  cursor: pointer;
  color: #FCFAFA;
  height: 100%;
  display: flex;
  align-items: center;
}

.search-bar button img {
  height: 16px;
  width: 16px;
}
</style>