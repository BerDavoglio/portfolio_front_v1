<template>
  <div class="about">
    <div className="h-96">
      <Swiper>
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
    <div className="mx-[20%]">
      <div className="text-3xl font-bold text-left">Quem é?</div>
      <div className="text-justify">Bernardo Davoglio, atualmente estudante de Engenharia Química
        pela Universidade Federal do Paraná, é um desenvolvedor de Softwares, tanto Front-End
        quanto Back-End, com um vasto conhecimento em diversas linguagens de programação, como
        JavaScript e PHP.
      </div>
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
