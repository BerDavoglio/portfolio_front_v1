<template>
  <div class="about">
    <div className="h-96">
      <Swiper>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_1.jpeg" alt="" className="
              object-cover
              max-h-72 w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_2.jpeg" alt="" className="
              object-cover
              max-h-72 w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_3.jpeg" alt="" className="
              object-cover
              max-h-72 w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/images/ber_foto_4.jpg" alt="" className="
              object-cover
              max-h-72 w-[60%]
              m-auto rounded-3xl">
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

export default {
  name: 'AboutView',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
};
</script>
