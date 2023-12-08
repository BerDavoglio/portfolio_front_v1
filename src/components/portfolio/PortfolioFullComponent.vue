<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="m-auto my-10 max-h-[40rem]">
      <Carousel :itemsToShow="1.75"
                :wrapAround="true"
                :transition="1000"
                :autoplay="3000">
        <Slide v-for="(image, index) in this.images"
               :key="index">
          <img :src="[urlLocation.split('portfolio_front_v1')[0] + 'portfolio_front_v1/' + image]"
               alt=""
               className="object-contain cursor-pointer
                          m-auto mt-10 rounded-3xl">
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div className="text-3xl mx-auto my-10 font-semibold">{{ $t(this.obj.title) }}</div>
    <div className="h-0.5 max-w-[65rem] m-auto bg-gray-300 my-2"></div>
    <div v-for="i in this.obj.description"
         v-bind:key="i"
         className="my-5">
      <div className="text-xl font-semibold
      text-justify px-2
          m-auto max-w-[60rem]">{{ i.title }}</div>
      <div className="text-justify px-2
          m-auto max-w-[60rem]">{{ i.text }}</div>
    </div>
    <div className="text-justify px-10 m-auto max-w-[60rem] my-10">
      <div className="font-bold text-lg">
        {{ $t('portfolio.tec') }}:
      </div>
      <div v-for="i in $t(this.obj.tecnologies).split(',')"
           v-bind:key="i">
        <li>{{ i }}</li>
      </div>
    </div>
    <div class="my-10">
      <div v-for="i in this.obj.link"
           v-bind:key="i">
        <div className="text-justify px-2
          m-auto max-w-[60rem]
          underline hover:text-blue-500
          cursor-pointer"
             @click="goToProject(i)">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Carousel, Navigation, Pagination, Slide,
} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'PortfolioFullView',
  props: [
    'obj',
  ],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [],
      urlLocation: '',
    };
  },
  methods: {
    goToProject(linkUtilizado) {
      window.open(linkUtilizado, '_blank');
    },
  },
  beforeMount() {
    this.urlLocation = window.location.href;
    this.obj.image.forEach((obj) => {
      this.images.push(obj);
    });
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid black;
}
</style>
