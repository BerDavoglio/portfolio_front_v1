<template>
  <div class="about" className="mb-8">
    <div className="h-96 mt-8">
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
    <div className="mx-[20%] mt-10">
      <div className="text-3xl font-bold text-left">
        {{ $t('about.tecnologies.title') }}
      </div>
      <div className="text-justify">
        {{ $t('about.tecnologies.description') }}
        <div className="mx-10 my-4">
          <li>Python (Django)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (NodeJS, React/React Native, Vue, Angular, NuxtJS)</li>
          <li>PHP (Blade, Laravel)</li>
          <li>Dart (Flutter)</li>
          <li>C++ (Unreal)</li>
          <li>C# (ASP.NET Core 5, Unity)</li>
          <li>Power BI/Excel</li>
        </div>
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
