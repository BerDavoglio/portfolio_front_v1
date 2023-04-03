<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="about">
    <div :className="[
      'grid bg-js_bg bg-center bg-gray-500 bg-no-repeat w-full '
      + (haveFoto ? 'grid-cols-2 h-[42rem]' : 'grid-cols-1 h-[60rem]')]">
      <img alt="" src="../../assets/images/ber_foto_1.jpeg" :className="
        ['cursor-pointer object-cover w-[70%] mx-auto rounded-3xl ring ring-pink-500 ring-offset-4 ring-offset-cyan-500 '
          + (haveFoto ? 'my-10 h-[85%]' : 'mt-10 h-64')]" @click="makeImageFull" />
      <div v-if="fullScreen" className="h-full w-full bg-gray-400/50 cursor-pointer fixed left-0 top-0"
        @click="makeImageFull">
        <img alt="" src="../../assets/images/ber_foto_1.jpeg" className="w-[42rem] mx-auto z-50" />
      </div>
      <div>
        <p className="
                  text-white text-justify
                  w-[75%] max-h-[32rem]
                  rounded-md
                  mt-10 mx-auto p-4
                  bg-gray-900/75
                  overflow-y-scroll scrollbar">
          {{ $t('home.about.text') }}
        </p>
        <div className="ml-[12.5%]
                  w-32 bg-red-700 text-white p-2 mt-4 rounded-md hover:bg-red-800
                  active:bg-red-900 cursor-pointer" @click="goPage('about')">
          {{ $t('home.about.readMore') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  components: {},
  data() {
    return {
      windowWidth: window.innerWidth,
      haveFoto: true,
      fullScreen: false,
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

<style>
.scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}
</style>
