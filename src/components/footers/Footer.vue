<template>
  <footer class="footer text-base flex flex-wrap justify-between">
    <div class="footer-section basis-2/6">
      <p class="titre text-basic font-bold text-space-cadet">UNE QUESTION ?</p>
      <ul class="font-extralight text-space-cadet">
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/feedback">Faire un retour ?</router-link></li>
        <li><router-link to="/order-status">Suivre ma commande</router-link></li>
      </ul>
    </div>
    <div class="footer-section basis-2/6">
      <p class="titre font-bold text-space-cadet">À PROPOS</p>
      <ul class="font-extralight text-space-cadet">
        <li><router-link to="/faq">Qui sommes-nous ?</router-link></li>
        <li><router-link to="/faq">Nos engagements</router-link></li>
        <li><router-link to="/faq">Confidentialité des données</router-link></li>
      </ul>
    </div>
    <div class="footer-section basis-2/6">
      <p class="titre font-bold text-space-cadet">RENCONTRER NOS ARTISANS</p>
      <ul class="font-extralight text-space-cadet">
        <li><router-link to="/faq">Nos adresses</router-link></li>
      </ul>
    </div>
    <div class="footer-section logo-section basis-full">
      <img src="@/assets/minilogo.svg" alt="Mini Logo" />
      <div class="social-icons flex">
        <img src="@/assets/instagramicon.svg" alt="Instagram Icon" />
        <img src="@/assets/linkedinicon.svg" alt="LinkedIn Icon" />
        <img src="@/assets/facebookicon.svg" alt="Facebook Icon" />
      </div>
      <p>© 2024 Craftby - Conception BestTeam</p>
      <p>Politique de confidentialité</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 1440px;
  padding: 40px 0;
}

.footer-section {
  text-align: center;
  padding: 20px;
}

.titre {
  margin-bottom: 20px;
}
.footer-section ul {
  margin-bottom: 10px;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.logo-section img {
  margin: 10px;
}

</style>

<script setup lang="ts">
</script>