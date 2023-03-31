<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="grid grid-cols-1 py-4">
      <div>
        <p className="text-2xl">Bernardo Davoglio</p>
        <p className="mb-2">Programador</p>
      </div>
      <div className="grid grid-cols-4 m-auto h-12 cursor-pointer" v-if="!isCell">
        <div className="
                    w-24
                    border-r-2
                    hover:bg-gray-300
                    active:bg-gray-400
                    active:text-white
                    py-4
                    border-l-2" @click="goHome">
          Home
        </div>
        <div className="
                    w-24
                    border-r-2
                    hover:bg-gray-300
                    active:bg-gray-400
                    active:text-white
                    py-4" @click="goAbout">
          About
        </div>
        <div className="
                    w-24
                    border-r-2
                    hover:bg-gray-300
                    active:bg-gray-400
                    active:text-white
                    py-4" @click="goPort">
          Portfolio
        </div>
        <div className="
                    w-24
                    border-r-2
                    hover:bg-gray-300
                    active:bg-gray-400
                    active:text-white
                    py-4" @click="goCont">
          Contact
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
    goHome() {
      this.$router.push({ name: 'home' });
    },
    goAbout() {
      this.$router.push({ name: 'about' });
    },
    goPort() {
      this.$router.push({ name: 'portfolio' });
    },
    goCont() {
      this.$router.push({ name: 'contact' });
    },
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth < 768) {
        this.isCell = true;
      } else {
        this.isCell = false;
      }
    },
  },
  beforeMount() {
    if (window.innerWidth < 768) {
      this.isCell = true;
    } else {
      this.isCell = false;
    }
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
