<template>
  <div className="p-4">
    <div className="mb-2 font-bold text-xl">
      {{ $t('home.tecnologies.title') }}:
    </div>
    <Carousel :itemsToShow="8"
              :transition="1000"
              :autoplay="3000">
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="io-logo-javascript"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="la-node-js"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="co-vue-js"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="co-react"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="co-php"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="co-laravel"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="si-dart"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="co-flutter"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="la-html5"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="la-css3-alt"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="si-cplusplus"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="si-csharp"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="si-powerbi"
                scale="4"></v-icon>
      </Slide>
      <Slide v-for="image in 1"
          :key="image">
        <v-icon name="si-arduino"
                scale="4"></v-icon>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'TecnologiesComponent',
  components: {
    Carousel,
    Slide,
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
    verifyResize(i) {
      if (i > 1200) {
        return 10;
      } if (i < 830) {
        return 3;
      }
      return 7;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.slides = this.verifyResize(newWidth);
    },
  },
  beforeMount() {
    this.slides = this.verifyResize(window.innerWidth);
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
