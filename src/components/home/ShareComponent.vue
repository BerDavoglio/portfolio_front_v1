<template>
  <div>
    <Carousel :itemsToShow="1"
              :wrapAround="true"
              :transition="1000"
              :autoplay="5000">
      <Slide v-for="(obj, index) in list"
             v-bind:key="index">
        <share-block-component :object=obj :index="index" />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import ShareBlockComponent from './ShareBlockComponent.vue';
import PortfolioList from '../../assets/portfolio_list';

export default {
  name: 'ShareComponent',
  components: {
    ShareBlockComponent,
    Carousel,
    Slide,
  },
  data() {
    return {
      list: [],
    };
  },
  beforeMount() {
    this.list = PortfolioList;
  },
};
</script>
