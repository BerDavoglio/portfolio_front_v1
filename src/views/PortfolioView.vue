<template>
  <div v-for="obj in this.portfolio" v-bind:key="obj">
    <portfolio-block-component :obj="obj"></portfolio-block-component>
  </div>
</template>

<script>
import PortfolioBlockComponent from '../components/portfolio/PortfolioBlockComponent.vue';
import PortfolioList from '../assets/portfolio_list';

export default {
  name: 'PortfolioView',
  components: {
    PortfolioBlockComponent,
  },
  data() {
    return {
      portfolio: PortfolioList,
    };
  },
};
</script>
