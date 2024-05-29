<template>
  <nav class="breadcrumb">
    <router-link v-for="(route, index) in breadcrumbs" :key="index" :to="route.path">{{ route.name }}</router-link>
  </nav>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'

export default {
  name: 'Breadcrumbs',
  setup() {
    const route = useRoute()
    const breadcrumbs = computed(() => {
      let pathArray = route.path.split('/')
      pathArray.shift()
      let breadcrumbs = pathArray.map((path, i) => {
        return {path: '/' + pathArray.slice(0, i + 1).join('/') + '/', name: path}
      })
      breadcrumbs.unshift({path: '/', name: 'home /'})
      return breadcrumbs
    })
    return {breadcrumbs}
  }
}
</script>

<style scoped>
.breadcrumb a {
  margin-right: 5px;
}
</style>