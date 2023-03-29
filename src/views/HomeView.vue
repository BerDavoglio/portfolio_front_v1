<template>
  <div class="home">
    <share-component></share-component>
    <about-component></about-component>
    <portfolio-component></portfolio-component>
  </div>
</template>

<script>
import ShareComponent from '../components/home/ShareComponent.vue';
import AboutComponent from '../components/home/AboutComponent.vue';
import PortfolioComponent from '../components/home/PortfolioComponent.vue';

export default {
  name: 'HomeView',
  components: {
    ShareComponent,
    AboutComponent,
    PortfolioComponent,
  },
};
</script>
