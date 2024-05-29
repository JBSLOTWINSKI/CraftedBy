<template>
  <div>
    <header class="flex flex-wrap  justify-center" :style="{ 'background-color': 'var(--color-space-cadet)' }">
      <div id="app" class="flex content-between max-w-1440">
        <NavbarContainer />
      </div>
    </header>

    <div class="flex flex-wrap flex-col max-w-1440 m-auto">
      <div class="flex m-2 pl-5">
        <Breadcrumbs />
      </div>
      <div class="flex justify-center max-w-1440 m-auto pb-20">
        <router-view />
      </div>
    </div>
    <footer>
      <div class="flex flex-wrap justify-center bg-space-cadet">
        <TrustBanner />
      </div>
      <div class="flex flex-wrap justify-center text-dark-purple bg-seasalt">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script>
import NavbarContainer from './components/headers/NavbarContainer.vue';
import TrustBanner from './components/footers/TrustBanner.vue';
import Footer from './components/footers/Footer.vue';
import Breadcrumbs from "@/components/components/breadcrumbs.vue";

export default {
  components: {
    NavbarContainer,
    TrustBanner,
    Footer,
    Breadcrumbs,
  },
};
</script>

<style scoped>

</style>
