<template>
  <div class="order-steps-container">
    <div
        v-for="(step, index) in steps"
        :key="index"
        :class="['step', { active: currentStep >= index + 1 }]">
      <div class="step-number">{{ index + 1 }}</div>
      <div class="step-label">{{ step }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSteps',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.order-steps-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -50%;
  width: 100%;
  height: 2px;
  background-color: #DBDFE6; /* Couleur pour les étapes inactives */
  z-index: -1;
}

.step.active:not(:last-child)::after {
  background-color: #EA4E48; /* Couleur pour les étapes actives */
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #DBDFE6; /* Couleur pour les étapes inactives */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.step.active .step-number {
  background-color: #EA4E48; /* Couleur pour les étapes actives */
}

.step-label {
  text-align: center;
  color: #2B2B42; /* Couleur du texte */
}
</style>
