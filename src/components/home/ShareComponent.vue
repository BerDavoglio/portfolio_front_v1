<!-- eslint-disable max-len -->
<template>
  <div class="share" className="h-[32rem] p-4">
    <div className="h-[28rem] max-w-[42rem] mx-auto rounded p-6"
      style='background: linear-gradient(124.09deg, #D157F2 1.58%, #56308C 20.51%,#5D60A6 77.34%, #1F1640 115.83%);'>
      <div className="text-white text-3xl font-semibold">Projeto de Destaque:</div>
      <div :className=classeFoto>
        <img src="../../assets/portfolio/project_test/1.png" alt="" className="
              object-cover
              h-[20rem] w-[80%]
              m-auto mt-10 rounded-3xl" v-if="haveFoto">
        <div>
          <div className="m-8 text-white text-justify">
            Projeto <strong>B1L3Lab</strong>: Projeto de Iniciação ciêntifica na qual
            teve seu desenvolvimento na Universidade Federal do Paraná pela entidade
            Ciência é para Todos, com o objetivo de criar um dispositivo IoT para
            segurança de ciclistas em volta do Brasil.
          </div>
          <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
          <div className="ml-[20%]
              w-32 bg-red-700 text-white p-2 mt-4 rounded-md hover:bg-red-800
              active:bg-red-900 cursor-pointer" @click="goProject">Read More</div>
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
      classeFoto: 'grid grid-cols-2',
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    goProject() {
      this.$router.push({ name: 'home' });
    },
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth < 768) {
        this.haveFoto = false;
        this.classeFoto = 'grid grid-cols-1';
      } else {
        this.haveFoto = true;
        this.classeFoto = 'grid grid-cols-2';
      }
    },
  },
  beforeMount() {
    if (window.innerWidth < 768) {
      this.haveFoto = false;
      this.classeFoto = 'grid grid-cols-1';
    } else {
      this.haveFoto = true;
      this.classeFoto = 'grid grid-cols-2';
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
