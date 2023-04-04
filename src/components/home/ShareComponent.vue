<template>
  <div>
    <Swiper :modules="modules" :space-between="50" navigation :autoplay="{ deplay: 5000 }">
      <SwiperSlide v-for="obj in objects" v-bind:key="obj">
        <share-block-component :object=obj></share-block-component>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation,
} from 'swiper';

import ShareBlockComponent from './ShareBlockComponent.vue';

// eslint-disable-next-line import/extensions
import 'swiper/css';
// eslint-disable-next-line import/extensions
import 'swiper/css/navigation';

export default {
  name: 'ShareComponent',
  components: {
    ShareBlockComponent,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      objects: [
        {
          image: '1Zlp1csuZYStsNqvhOvAmeQFsAxwjf24X',
          description: 'home.share.description_1',
          link: 'home',
        },
        {
          image: '15Za159SnbQpJEMUaKHhmj1h-R5pWcACF',
          description: 'home.share.description_2',
          link: 'home',
        },
        {
          image: '1WQgVEDhPoU_gYTvxeG755-WFYTKt3KbP',
          description: 'home.share.description_3',
          link: 'home',
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
