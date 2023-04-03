<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->

<template>
  <div className='grid m-auto cursor-pointer grid-cols-4'>
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
      py-4" @click="goPage('portfolio')">
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
</template>

<script>
export default {
  name: 'ButtonsLineComponent',
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
