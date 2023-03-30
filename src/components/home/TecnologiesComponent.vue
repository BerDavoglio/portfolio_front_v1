<template>
  <div className="p-4">
    <div className="mb-2 font-bold text-xl">Tecnologias Utilizadas:</div>
    <Swiper :slides-per-view="slides">
      <SwiperSlide>
        <v-icon name="io-logo-javascript" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="la-node-js" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="co-vue-js" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="co-react" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="co-php" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="co-laravel" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="si-dart" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="co-flutter" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="la-html5" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="la-css3-alt" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="si-cplusplus" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="si-csharp" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="si-powerbi" scale="4"></v-icon>
      </SwiperSlide>
      <SwiperSlide>
        <v-icon name="si-arduino" scale="4"></v-icon>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

import OhVueIcon from 'oh-vue-icons';

export default {
  name: 'TecnologiesComponent',
  components: {
    Swiper,
    SwiperSlide,
    'v-icon': OhVueIcon,
  },
  data() {
    return {
      slides: 10,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth > 1200) {
        this.slides = 10;
      } else if (newWidth < 830) {
        this.slides = 3;
      } else {
        this.slides = 7;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
