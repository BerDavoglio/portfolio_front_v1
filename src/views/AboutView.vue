<template>
  <div class="about" className="mb-8">
    <div className="h-96">
      <Swiper :modules="modules" :space-between="50" navigation :autoplay="{ deplay: 5000 }">
        <SwiperSlide>
          <img src="../assets/images/ber_foto_1.jpeg" alt="" className="
              object-cover
              h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_2.jpeg" alt="" className="
              object-cover
              max-h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_3.jpeg" alt="" className="
              object-cover
              max-h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_4.jpg" alt="" className="
              object-cover
              max-h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="mx-[20%] my-2">
      <div className="text-3xl font-bold text-left">
        {{ $t('about.whos.title') }}
      </div>
      <div className="text-justify">
        {{ $t('about.whos.description') }}
      </div>
    </div>
    <div className="mx-[20%]">
      <div className="text-3xl font-bold text-left">
        {{ $t('about.tecnologies.title') }}
      </div>
      <div className="text-justify">
        {{ $t('about.tecnologies.description') }}
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation,
} from 'swiper';

// eslint-disable-next-line import/extensions
import 'swiper/css';
// eslint-disable-next-line import/extensions
import 'swiper/css/navigation';

export default {
  name: 'AboutView',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
