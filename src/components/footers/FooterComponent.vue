<template>
  <div>
    <div :className=classeFooter>
      <part-one></part-one>
      <part-two></part-two>
      <part-three></part-three>
      <part-four></part-four>
    </div>
  </div>
  <div class="bg-black w-full h-12 text-white p-4">
    <div>© Todos os direitos reservados, Bernardo Davoglio, 2022.</div>
  </div>
</template>

<script>
import PartOne from './PartOne.vue';
import PartTwo from './PartTwo.vue';
import PartThree from './PartThree.vue';
import PartFour from './PartFour.vue';

export default {
  name: 'FooterComponent',
  components: {
    PartOne,
    PartTwo,
    PartThree,
    PartFour,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      classeFooter: 'bg-black w-full pt-10 grid grid-cols-4 text-white',
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    goAbout() {
      this.$router.push({ name: 'about' });
    },
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth < 768) {
        this.classeFooter = 'bg-black w-full pt-10 grid grid-cols-2 text-white';
      } else {
        this.classeFooter = 'bg-black w-full pt-10 grid grid-cols-4 text-white';
      }
    },
  },
  beforeMount() {
    if (window.innerWidth < 768) {
      this.classeFooter = 'bg-black w-full pt-10 grid grid-cols-2 text-white';
    } else {
      this.classeFooter = 'bg-black w-full pt-10 grid grid-cols-4 text-white';
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
