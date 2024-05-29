<template>
  <div class="trust-banner text-base flex columns-3 w-full">
    <div class="trust-item">
      <div class="item-top" >
        <img src="@/assets/deliveryicon.svg" alt="Delivery Icon" />
        <p class="font-bold text-seasalt ">LIVRAISON OFFERTE</p>
      </div>
      <p class="font-extralight text-seasalt">Livraison offerte dès 100€ en France métropolitaine et dans les DOM-TOM</p>
    </div>
    <div class="trust-item">
      <div class="item-top">
        <img src="@/assets/tradeicon.svg" alt="Trade Icon" />
        <p class="font-bold text-seasalt ">RETOURS ET ÉCHANGE GRATUITS</p>
      </div>
      <p class="font-extralight text-seasalt">30 jours pour changer d'avis en France métropolitaine</p>
    </div>
    <div class="trust-item">
      <div class="item-top">
        <img src="@/assets/lockicon.svg" alt="Lock Icon" />
        <p class="font-bold text-seasalt ">PAIEMENT SÉCURISÉ</p>
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

<style scoped>


.trust-banner {
  width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

.trust-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.item-top {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  gap: 10px;
}
</style>
