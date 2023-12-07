<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->

<template>
  <div>
    <div :className="[
      'bg-black w-full pt-10 grid text-white '
      + (this.windowWidth > 768 ? 'grid-cols-3' : 'grid-cols-1')]">
      <part-two></part-two>
      <part-three></part-three>
      <part-four></part-four>
    </div>
  </div>
  <div className="p-6 bg-black text-white text-2xl">
    <div className="w-48 p-2 m-auto border-2 border-white rounded-2xl">
    </div>
  </div>
  <div class="bg-black w-full text-white pb-4">
    <div>© {{ $t('footer.rights') }}</div>
  </div>
</template>

<script>
// import PartOne from './PartOne.vue';
import PartTwo from './PartTwo.vue';
import PartThree from './PartThree.vue';
import PartFour from './PartFour.vue';

export default {
  name: 'FooterComponent',
  components: {
    // PartOne,
    PartTwo,
    PartThree,
    PartFour,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
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
