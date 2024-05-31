<template>
  <footer class="footer flex flex-wrap justify-between py-10 w-full max-w-screen-xl mx-auto">
    <div class="footer-section basis-2/6 text-center p-5">
      <p class="titre font-bold text-space-cadet mb-5">UNE QUESTION ?</p>
      <ul class="font-extralight text-space-cadet mb-2.5">
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/feedback">Faire un retour ?</router-link></li>
        <li><router-link to="/order-status">Suivre ma commande</router-link></li>
      </ul>
    </div>
    <div class="footer-section basis-2/6 text-center p-5">
      <p class="titre font-bold text-space-cadet mb-5">À PROPOS</p>
      <ul class="font-extralight text-space-cadet mb-2.5">
        <li><router-link to="/faq">Qui sommes-nous ?</router-link></li>
        <li><router-link to="/faq">Nos engagements</router-link></li>
        <li><router-link to="/faq">Confidentialité des données</router-link></li>
      </ul>
    </div>
    <div class="footer-section basis-2/6 text-center p-5">
      <p class="titre font-bold text-space-cadet mb-5">RENCONTRER NOS ARTISANS</p>
      <ul class="font-extralight text-space-cadet mb-2.5">
        <li><router-link to="/faq">Nos adresses</router-link></li>
      </ul>
    </div>
    <div class="footer-section logo-section basis-full flex flex-col items-center p-2.5">
      <img src="@/assets/minilogo.svg" alt="Mini Logo" class="my-2.5" />
      <div class="social-icons flex space-x-2.5">
        <img src="@/assets/instagramicon.svg" alt="Instagram Icon" />
        <img src="@/assets/linkedinicon.svg" alt="LinkedIn Icon" />
        <img src="@/assets/facebookicon.svg" alt="Facebook Icon" />
      </div>
      <p class="my-2.5">© 2024 Craftby - Conception BestTeam</p>
      <p>Politique de confidentialité</p>
    </div>
  </footer>
</template>

<script setup>
</script>
