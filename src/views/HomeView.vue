<template>
  <div class="home">
    <divulgacao-component></divulgacao-component>
    <sobre-component></sobre-component>
  </div>
</template>

<script>
import DivulgacaoComponent from '../components/home/DivulgacaoComponent.vue';
import SobreComponent from '../components/home/SobreComponent.vue';

export default {
  name: 'HomeView',
  components: {
    DivulgacaoComponent,
    SobreComponent,
  },
};
</script>
