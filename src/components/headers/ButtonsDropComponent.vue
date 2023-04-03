<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div className="mx-10 border-y-2" v-if="!isOpen">
    <div className='mx-auto cursor-pointer mt-4'>
      <div className="
          mt-3
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white" @click="goPage('home')">
        {{ $t('menu.home') }}
      </div>
      <div className="
          mt-3
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white" @click="goPage('about')">
        {{ $t('menu.about') }}
      </div>
      <div className="
          mt-3
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white" @click="goPage('portfolio')">
        {{ $t('menu.portfolio') }}
      </div>
      <div className="
          mt-3 mb-3
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white" @click="goPage('contact')">
        {{ $t('menu.contact') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonsDropComponent',
  props: [
    'isOpen',
  ],
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
