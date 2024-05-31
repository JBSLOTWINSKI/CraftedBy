<template>
  <div class="trust-banner flex justify-between max-w-1440 w-full py-10">
    <div class="trust-item flex flex-col items-center text-center flex-1">
      <div class="item-top flex items-center pb-5 gap-2">
        <img src="@/assets/deliveryicon.svg" alt="Delivery Icon" />
        <p class="font-bold text-seasalt">LIVRAISON OFFERTE</p>
      </div>
      <p class="font-extralight text-seasalt">Livraison offerte dès 100€ en France métropolitaine et dans les DOM-TOM</p>
    </div>
    <div class="trust-item flex flex-col items-center text-center flex-1">
      <div class="item-top flex items-center pb-5 gap-2">
        <img src="@/assets/tradeicon.svg" alt="Trade Icon" />
        <p class="font-bold text-seasalt">RETOURS ET ÉCHANGE GRATUITS</p>
      </div>
      <p class="font-extralight text-seasalt">30 jours pour changer d'avis en France métropolitaine</p>
    </div>
    <div class="trust-item flex flex-col items-center text-center flex-1">
      <div class="item-top flex items-center pb-5 gap-2">
        <img src="@/assets/lockicon.svg" alt="Lock Icon" />
        <p class="font-bold text-seasalt">PAIEMENT SÉCURISÉ</p>
      </div>
      <p class="font-extralight text-seasalt">Toutes vos transactions via Visa, Mastercard et Amex</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrustBanner',
};
</script>
