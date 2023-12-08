<template>
  <div class="about"
       className="mb-8">
    <div className="h-96 mt-8">
      <Carousel :itemsToShow="1"
                :wrapAround="true"
                :transition="1000"
                :autoplay="3000">
        <Slide v-for="image in 1"
          :key="image">
          <img src="../assets/images/ber_foto_1.jpeg"
               alt=""
               className="
              object-contain
              h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </Slide>
        <Slide v-for="image in 1"
          :key="image">
          <img src="../assets/images/ber_foto_2.jpeg"
               alt=""
               className="
              object-contain
              max-h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </Slide>
        <Slide v-for="image in 1"
          :key="image">
          <img src="../assets/images/ber_foto_3.jpeg"
               alt=""
               className="
              object-contain
              max-h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </Slide>
        <Slide v-for="image in 1"
          :key="image">
          <img src="../assets/images/ber_foto_4.jpg"
               alt=""
               className="
              object-contain
              max-h-[22rem] w-[60%]
              m-auto rounded-3xl">
        </Slide>
      </Carousel>
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
    <div className="mx-[20%] my-2">
      <div className="text-3xl font-bold text-left">
        {{ $t('about.additional.title') }}
      </div>
      <div className="text-justify">
        {{ $t('about.additional.textOne') }}
      </div>
      <div className="text-justify my-4">
        {{ $t('about.additional.textTwo') }}
      </div>
      <div className="text-justify">
        {{ $t('about.additional.textThree') }}
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'AboutView',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {};
  },
};
</script>
