<template>
  <div v-if="!this.$route.params.id">
    <div v-for="(obj, index) in this.portfolio" v-bind:key="obj">
      <portfolio-block-component :obj="obj" :index="index"></portfolio-block-component>
    </div>
  </div>
  <div v-else>
    <portfolio-full-component :obj="this.portfolio[this.$route.params.id - 1]" />
  </div>
</template>

<script>
import PortfolioBlockComponent from '../components/portfolio/PortfolioBlockComponent.vue';
import PortfolioFullComponent from '../components/portfolio/PortfolioFullComponent.vue';

import PortfolioList from '../assets/portfolio_list';

export default {
  name: 'PortfolioView',
  components: {
    PortfolioBlockComponent,
    PortfolioFullComponent,
  },
  data() {
    return {
      portfolio: PortfolioList,
    };
  },
};
</script>
