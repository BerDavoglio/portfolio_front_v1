<!-- eslint-disable max-len -->
<template>
  <div class="share" className="h-[32rem] p-4">
    <div className="h-[28rem] max-w-[42rem] mx-auto rounded p-6"
      style="background: linear-gradient(124.09deg, #D157F2 1.58%, #56308C 20.51%,#5D60A6 77.34%, #1F1640 115.83%);">
      <div className="text-white text-3xl font-semibold">
        {{ $t('home.share.title') }}:
      </div>
      <div :className="['grid ' + (haveFoto ? 'grid-cols-2' : 'grid-cols-1')]">
        <img src="../../assets/portfolio/project_test/1.png" alt="" className="
              object-cover
              h-[20rem] w-[80%]
              m-auto mt-10 rounded-3xl" v-if="haveFoto">
        <div>
          <div className="m-8 h-[14rem] text-white text-justify overflow-y-scroll scrollbar">
            {{ $t('home.share.description') }}
          </div>
          <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
          <div className="ml-[20%]
              w-32 bg-red-700 text-white p-2 mt-4 rounded-md hover:bg-red-800
              active:bg-red-900 cursor-pointer" @click="goPage('home')">
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
  name: 'ShareComponent',
  data() {
    return {
      windowWidth: window.innerWidth,
      haveFoto: true,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    verifyResize(i) {
      if (i < 768) {
        return true;
      } return false;
    },
    goPage(route) {
      this.$router.push({ name: route });
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
