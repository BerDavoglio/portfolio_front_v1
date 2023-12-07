<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->

<template>
  <div class="share" className="h-[44rem] pt-16">
    <div className="h-[34rem] max-w-[50rem] mx-auto rounded p-6"
      style="background: linear-gradient(124.09deg, #D157F2 1.58%, #56308C 20.51%,#5D60A6 77.34%, #1F1640 115.83%);">
      <div className="text-white text-3xl font-semibold">
        {{ $t('home.share.title') }}:
      </div>
      <div :className="['grid ' + (haveFoto ? 'grid-cols-2' : 'grid-cols-1')]">
        <img :src="this.object.image[0]" alt="" className="
                    object-cover cursor-pointer
                    h-[22rem] w-[80%]
                    m-auto mt-10 rounded-3xl" @click="makeImageFull">
        <div v-if="this.fullScreen" @click="makeImageFull"
          className="h-full w-full bg-gray-400/50 cursor-pointer fixed left-0 top-0">
          <img :src="this.object.image[0]" alt=""
            className=" z-50 object-contain mx-auto py-10 max-h-[40rem]">
        </div>
        <div>
          <div v-if="haveFoto" className="px-2 m-8 h-[20rem] text-white text-justify overflow-y-scroll scrollbar">
            {{ $t(this.object.description) }}
          </div>
          <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
          <div className="ml-[30%]
                    w-32 bg-red-700 text-white p-2 mt-4 rounded-md hover:bg-red-800
                    active:bg-red-900 cursor-pointer" @click="goPage(this.object.link[0], this.index)">
            {{ $t('home.share.readMore') }}
          </div>
        </div>
      </div>
    </div>
    <div className="mb-12"></div>
  </div>
</template>

<script>

export default {
  name: 'ShareBlockComponent',
  data() {
    return {
      windowWidth: window.innerWidth,
      haveFoto: true,
      fullScreen: false,
    };
  },
  props: {
    object: Object,
    index: Number,
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    verifyResize(i) {
      if (i < 600) {
        return true;
      } return false;
    },
    goPage(route, params) {
      this.$router.push({ name: route, params: { id: params } });
    },
    makeImageFull() {
      this.fullScreen = !this.fullScreen;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.haveFoto = !this.verifyResize(newWidth);
    },
  },
  beforeMount() {
    this.haveFoto = !this.verifyResize(window.innerWidth);
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
