<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <Swiper :modules="modules" :space-between="50" navigation :autoplay="{ deplay: 5000 }">
      <SwiperSlide v-for="i in this.obj.image" v-bind:key="i">
        <img :src="['http://drive.google.com/uc?export=view&id=' + i]" alt="" className="
                        object-cover cursor-pointer
                        h-[32rem] w-[50%]
                        m-auto mt-10 rounded-3xl" @click="makeImageFull">
        <div v-if="this.fullScreen" @click="makeImageFull"
          className="h-full w-full bg-gray-400/50 cursor-pointer fixed left-0 top-0">
          <img :src="['http://drive.google.com/uc?export=view&id=' + i]" alt=""
            className=" z-50 object-contain mx-auto py-10 max-h-[32rem]">
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="text-3xl mx-auto my-10 font-semibold">{{ $t(this.obj.title) }}</div>
    <div className="h-0.5 max-w-[65rem] m-auto bg-gray-300 my-2"></div>
    <div className="text-justify px-2 m-auto max-w-[60rem] my-10">
      {{ $t(this.obj.descriptionOne) }}
    </div>
    <div className="text-justify px-10 m-auto max-w-[60rem] my-10">
      <div className="font-bold text-lg">
        {{ $t('portfolio.tec') }}:
      </div>
      <div v-for="i in $t(this.obj.descriptionTwo).split(',')" v-bind:key="i">
        <li>{{ i }}</li>
      </div>
    </div>
    <div className="text-justify px-2
        m-auto max-w-[60rem]
        my-10 underline hover:text-blue-500
        cursor-pointer" @click="goToProject">
      {{ $t(this.obj.link) }}
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation,
} from 'swiper';

export default {
  name: 'PortfolioFullView',
  props: [
    'obj',
  ],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      fullScreen: false,
    };
  },
  methods: {
    makeImageFull() {
      this.fullScreen = !this.fullScreen;
    },
    goToProject() {
      window.open(this.$t(this.obj.link), '_blank');
    },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
