<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="grid grid-cols-1 py-4">
      <div>
        <p className="text-2xl">Bernardo Davoglio</p>
        <p className="mb-2">{{ $t('header.subtitle') }}</p>
      </div>
      <div :className="['grid m-auto cursor-pointer ' + (isCell ? 'grid-cols-2' : 'grid-cols-4')]">
        <div className="
          w-24
          border-r-2
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4
          border-l-2" @click="goPage('home')">
          {{ $t('menu.home') }}
        </div>
        <div className="
          w-24
          border-r-2
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4" @click="goPage('about')">
          {{ $t('menu.about') }}
        </div>
        <div className="
          w-24
          border-r-2
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4
          border-l-2" @click="goPage('portfolio')">
          {{ $t('menu.portfolio') }}
        </div>
        <div className="
          w-24
          border-r-2
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4" @click="goPage('contact')">
          {{ $t('menu.contact') }}
        </div>
      </div>
    </div>
    <div className="w-[95%] h-0.5 bg-black m-auto"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {
  },
  data() {
    return {
      isCell: false,
      isCenter: 1,
      windowWidth: window.innerWidth,
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
      this.isCell = this.verifyResize(newWidth);
    },
  },
  beforeMount() {
    this.isCell = this.verifyResize(window.innerWidth);
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
