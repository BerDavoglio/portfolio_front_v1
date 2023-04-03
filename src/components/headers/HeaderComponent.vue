<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->

<template>
  <div>
    <div :className="['grid py-4 ' + (isCell ? 'grid-cols-1' : 'grid-cols-2')]">
      <div>
        <div :className="['text-2xl ' + (isCell ? ' grid grid-cols-5' : '')]">
          <div @click="openMenu" className="cursor-pointer">
            <v-icon name="gi-hamburger-menu" scale="2" v-if="isCell && !isOpen" style="margin-left: 1.5rem;" />
            <v-icon name="io-close-sharp" scale="2" v-if="isCell && isOpen" style="margin-left: 1.5rem;" />
          </div>
          <div className="col-2 col-span-3">Bernardo Davoglio</div>
        </div>
        <p className="mb-2">{{ $t('header.subtitle') }}</p>
      </div>
      <buttons-line-component v-if="!isCell"></buttons-line-component>
      <buttons-drop-component v-if="isCell" :isOpen="!isOpen"></buttons-drop-component>
    </div>
    <div className="w-[95%] h-0.5 bg-black m-auto"></div>
  </div>
</template>

<script>
import ButtonsLineComponent from './ButtonsLineComponent.vue';
import ButtonsDropComponent from './ButtonsDropComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ButtonsLineComponent,
    ButtonsDropComponent,
  },
  data() {
    return {
      isCell: false,
      isOpen: false,
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
    openMenu() {
      this.isOpen = !this.isOpen;
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
